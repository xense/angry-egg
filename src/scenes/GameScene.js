import BaseScene from "./BaseScene";
import Models from "../models/Models";

let lastPlatformY;
let lastPlatformRight;
let platforms;
let platformsList = [];
let enemies;
let enemiesList = [];
let stars;
let starsList = [];
let livesGroup;
let livesList = [];
let player;
let cursors;
let eggParts = 0;
let eggFinishTime = 0;

let speed = 300;
const eggDuration = 10000;
const platformWidth = 640;

let cdBack;
let cdRect;
let timeMS = 0;
let lives = 5;
let score = 0;

let isChick = true;

let pars = [];

export default class GameScene extends BaseScene {
	constructor() {
		super({key: "game"});

	}

	preload() {
		super.preload();
	}

	create() {
		super.create();

		// resetting all
		platformsList = [];
		enemiesList = [];
		starsList = [];
		livesList = [];
		eggParts = 0;
		eggFinishTime = 0;
		timeMS = 0;
		score = 0;
		lives = 5;
		pars = [];
		isChick = true;
		speed = 300;

		// parallaxes
		this.add.image(0, 0, 'par_0').setOrigin(0);
		for (let i = 1; i <= 3; i++) {
			let par = this.add.container();
			par.add(this.add.image(0, 0, 'par_' + i).setOrigin(0));
			par.add(this.add.image(0, 0, 'par_' + i).setOrigin(0).setX(1920));
			pars.unshift(par);
		}

		// groups
		platforms = this.physics.add.staticGroup();
		stars = this.physics.add.group({allowGravity: false});
		enemies = this.physics.add.group({allowGravity: false});
		livesGroup = this.physics.add.group({allowGravity: false});

		// generate first platform
		lastPlatformY = 500;
		lastPlatformRight = 0;
		this.createPlatform();

		// create player
		player = this.physics.add.sprite(300, 150, 'dude');

		this.cameras.main.startFollow(player);
		this.cameras.main.followOffset.set(-300, 0);
		this.cameras.main.setBounds(0, 0, 1920, 1080);

		this.physics.add.collider(player, platforms);

		this.physics.add.overlap(player, stars, this.collectStar, null, this);
		this.physics.add.overlap(player, enemies, this.collectEnemy, null, this);
		this.physics.add.overlap(player, livesGroup, this.collectLive, null, this);

		// input
		cursors = this.input.keyboard.createCursorKeys();
		this.input.on("pointerdown", this.jump, this);

		// HUD
		let textStyle = {
			fontFamily: "Arial",
			fontStyle: "bold",
			fontSize: 64,
			stroke: "#000000",
			strokeThickness: 6
		};
		this.txtParts = this.add.text(30, 30, 'parts: 0/3', textStyle).setOrigin(0);
		this.txtScore = this.add.text(30, 100, 'score: 0', textStyle).setOrigin(0);
		this.txtLives = this.add.text(30, 170, 'lives: ' + lives.toString(), textStyle).setOrigin(0);

		this.txtEggMode = this.add.text(1920 / 2, 100, 'EGG MODE!', textStyle).setOrigin(0.5);
		this.txtEggMode.visible = false;
		// egg cooldown indicator
		cdBack = this.add.rectangle(1920 / 2, 200, 400, 50, 0x00ff00).setVisible(false);
		cdRect = this.add.rectangle(1920 / 2, 200, 400, 50, 0xff0000).setVisible(false);


		// player anims
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
			frameRate: 10,
			repeat: -1
		});

		/*this.anims.create({
			key: 'egg',
			frames: this.anims.generateFrameNumbers('dude', {start: 4, end: 4}),
			frameRate: 10,
			repeat: -1
		});*/

		this.anims.create({
			key: 'egg',
			frames: [
				{ key: 'atlas', frame: 'egg' },
			],
			frameRate: 8,
			repeat: -1
		});

		player.anims.play('right', true);

		// fullscreen button
		let btnClip = this.add.ui_component(
			game.cache.json.get('btn'),
			['atlas']
		);
		btnClip.groupX = 1600;
		btnClip.groupY = 30;
		this.btn = new PhaserComps.UIComponents.UIButton();
		this.btn.appendClip(btnClip);
		this.btn.label = "Fullscreen";
		this.btn.on(PhaserComps.UIComponents.UIButton.EVENT_CLICK, this.onBtnFullScreen, this)
	}

	createPlatform() {
		let platformOffset = 100;
		let platform = platforms.create(lastPlatformRight + platformWidth / 2 + platformOffset, lastPlatformY, 'atlas', 'platform1');
		//lastPlatformRight = platform.x + platform.width / 2;
		platformsList.push(platform);
		if (lastPlatformY < 100) {
			lastPlatformY = 100;
		}

		let objX = Phaser.Math.Between(1, 3) * platformWidth / 4 + lastPlatformRight + platformOffset;
		if (Math.random() < 0.05) {
			livesList.push(
				livesGroup.create(objX, lastPlatformY - 120, 'dude', 4)
			)
		} else if (Math.random() > .5) {
			enemiesList.push(
				enemies.create(objX, lastPlatformY - 100, 'atlas', 'bomb1')
			);
		} else {
			starsList.push(
				stars.create(objX, lastPlatformY - 100, 'atlas', 'egg_part')
			);
		}

		lastPlatformY = Phaser.Math.Between(lastPlatformY - 50, game.scale.gameSize.height - 100);
	}

	update(time, deltaTime) {
		timeMS = time;
		let gameWidth = game.scale.gameSize.width;


		if (player.y > game.config.height) {
			this.gameOver();
			return;
		}

		//hpRect.width = hp;
		let timeLeft = (eggFinishTime - time) / eggDuration;
		if (timeLeft < 0) {
			this.switchToChick();
		} else {
			cdRect.width = 400 - 400 * timeLeft;
		}

		if (cursors.up.isDown) {
			this.jump();
		}

		let rightestX = 0;
		let i = 0;
		// move platforms
		while (i < platformsList.length) {
			let platform = platformsList[i];
			platform.x -= speed * (deltaTime / 1000);
			if (rightestX < platform.x + platform.width / 2) {
				rightestX = platform.x + platform.width / 2;
			}
			if (platform.x <= -platform.width / 2) {
				platformsList.splice(i, 1);
				platform.destroy(true, true);
			} else {
				platform.refreshBody();
				i++;
			}
		}

		i = 0;
		// move lives
		while (i < livesList.length) {
			let life = livesList[i];
			life.x -= speed * (deltaTime / 1000);
			if (life.x <= -life.width / 2) {
				livesList.splice(i, 1);
				life.destroy(true, true);
			} else {
				i++;
			}
		}

		i = 0;
		// move stars
		while (i < starsList.length) {
			let star = starsList[i];
			star.x -= speed * (deltaTime / 1000);
			if (star.x <= -star.width / 2) {
				starsList.splice(i, 1);
				star.destroy(true, true);
			} else {
				i++;
			}
		}

		i = 0;
		// move enemies
		while (i < enemiesList.length) {
			let enemy = enemiesList[i];
			enemy.x -= speed * (deltaTime / 1000);
			if (enemy.x <= -enemy.width / 2) {
				enemiesList.splice(i, 1);
				enemy.destroy(true, true);
			} else {
				i++;
			}
		}

		// add new platform
		if (rightestX < gameWidth) {
			lastPlatformRight = rightestX;
			//console.log(rightestX);
			this.createPlatform();
		}

		// move parallaxes
		for (i = 0; i < pars.length; i++) {
			let par = pars[i];
			par.x -= speed * (deltaTime / 1000) / (i + 1);
			if (par.x < -gameWidth) {
				par.x = 0;
			}
		}
	}

	jump() {
		if (!player.body.touching.down) {
			return;
		}
		player.setVelocityY(-700);
	}

	collectStar(player, star) {
		starsList.splice(starsList.indexOf(star), 1);
		star.disableBody(true, true);
		star.destroy(true, true);
		if (eggParts < 3) {
			eggParts += 1;
			if (eggParts >= 3) {
				this.startEggMode();
			}
			this.txtParts.text = 'parts: ' + eggParts.toString() + "/3";
		}
	}

	collectEnemy(player, enemy) {
		enemiesList.splice(enemiesList.indexOf(enemy), 1);
		enemy.disableBody(true, true);
		enemy.destroy(true, true);
		if (isChick) {
			this.removeLife();
		} else {
			score++;
			this.cameras.main.flash();
			this.txtScore.text = 'score: ' + score.toString();
			if (score % 5 === 0) {
				this.addLife();
			}
		}
	}

	collectLive(player, life) {
		livesList.splice(livesList.indexOf(life), 1);
		life.disableBody(true, true);
		life.destroy(true, true);
		this.addLife();
	}

	gameOver() {
		let textStyle = {
			fontFamily: "Arial",
			fontStyle: "bold",
			fontSize: 264,
			color: "#CC0000",
			stroke: "#000000",
			strokeThickness: 6
		};
		this.txtWasted = this.add.text(1920 / 2, 1080 / 2, 'W A S T E D', textStyle).setOrigin(0.5);
		this.txtWasted.angle = -20;

		if (score > Models.score) {
			Models.score = score;
		}

		game.scene.stop('game');
		game.scene.resume('menu');
	}

	startEggMode() {
		console.log('egg mode');
		isChick = false;
		eggFinishTime = timeMS + eggDuration;
		this.txtEggMode.visible = true;
		cdRect.visible = true;
		cdBack.visible = true;
		player.anims.play('egg', true);
		this.cameras.main.tint = 0xffffff
		// TODO switch to egg;
	}

	switchToChick() {
		if (isChick) return;
		eggParts = 0;
		this.txtParts.text = 'parts: ' + eggParts.toString() + "/3";
		console.log('chick mode');
		player.anims.play('right', true);
		eggFinishTime = 0;
		isChick = true;
		this.txtEggMode.visible = false;
		cdRect.visible = false;
		cdBack.visible = false;
	}

	removeLife() {
		if (lives === 0) {
			this.gameOver();
		} else {
			lives--;
			this.txtLives.text = 'lives: ' + lives.toString();
			this.cameras.main.shake(300, 0.01);
		}
		// TODO art
	}

	addLife() {
		lives++;
		this.txtLives.text = 'lives: ' + lives.toString();
		this.cameras.main.flash(250, 150, 255, 150);
		// TODO art
	}

	onBtnFullScreen() {
		game.scale.toggleFullscreen();
	}
}