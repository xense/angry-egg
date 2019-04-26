import BaseScene from "./BaseScene";

let platforms;
let platformsList = [];
let lastPlatformY;
let lastPlatformRight;
let enemies;
let enemiesList = [];
let stars;
let starsList = [];
let player;
let cursors;
let eggParts = 0;
let eggFinishTime = 0;
let speed = 200;
let hp = 100;

let eggDuration = 5000;
let cdRect;
let timeMS;

let hpRect;
let lives = 5;
let livesSprites = [];

let score = 0;
let isChick = true;

export default class GameScene extends BaseScene {
	constructor() {
		super({key: "game"});

	}

	preload() {
		super.preload();
	}

	create() {
		super.create();

		this.add.rectangle(400, 30, 100, 20, 0x00ff00);
		cdRect = this.add.rectangle(400, 30, 100, 20, 0xff0000);

		/*this.add.rectangle(600, 30, 100, 20, 0xff0000);
		hpRect = this.add.rectangle(600 - 50, 30, 100, 20, 0x00ff00).setOrigin(0, .5);*/

		platforms = this.physics.add.staticGroup();
		stars = this.physics.add.group({allowGravity: false});
		enemies = this.physics.add.group({allowGravity: false});

		lastPlatformY = 500;
		lastPlatformRight = 0;
		this.createPlatform();

		player = this.physics.add.sprite(300, 150, 'dude');

		this.cameras.main.startFollow(player);
		this.cameras.main.followOffset.set(-300, 0);
		this.cameras.main.setBounds(0, 0, 800, 600);

		this.physics.add.collider(player, platforms);

		this.physics.add.overlap(player, stars, this.collectStar, null, this);
		this.physics.add.overlap(player, enemies, this.collectEnemy, null, this);

		cursors = this.input.keyboard.createCursorKeys();
		this.input.on("pointerdown", this.jump, this);

		this.txtParts = this.add.text(30, 30, 'egg parts: 0').setOrigin(0);
		this.txtScore = this.add.text(30, 60, 'score: 0').setOrigin(0);
		this.txtLives = this.add.text(30, 90, 'score: 0').setOrigin(0);

		this.txtEggMode = this.add.text(400, 300, 'EGG MODE!');
		this.txtEggMode.visible = false;

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'egg',
			frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 4 }),
			frameRate: 10,
			repeat: -1
		});

		player.anims.play('right', true);
	}

	createPlatform() {
		let platform = platforms.create(lastPlatformRight + 200, lastPlatformY, 'platform');
		//lastPlatformRight = platform.x + platform.width / 2;
		platformsList.push(platform);
		if (lastPlatformY < 100) {
			lastPlatformY = 100;
		}

		let gotElement = false;
		if (Math.random() < 1) {
			let objX = Phaser.Math.Between(1,3) * 100 + lastPlatformRight;
			if (Math.random() > .5) {
				let enemy = enemies.create(objX, lastPlatformY - 40, 'bomb');
				enemiesList.push(enemy);
			} else {
				let star = stars.create(objX, lastPlatformY - 40, 'star');
				starsList.push(star);
			}
		}

		lastPlatformY = Phaser.Math.Between(lastPlatformY - 50, 500);
	}

	update(time, deltaTime) {
		timeMS = time;
		this.txtLives.text = 'lives: ' + lives.toString();
		this.txtParts.text = 'parts: ' + eggParts.toString();
		this.txtScore.text = 'score: ' + score.toString();

		if(player.y > game.config.height){
			this.gameOver();
		}

		//hpRect.width = hp;
		let timeLeft = (eggFinishTime - time) / eggDuration;
		if (timeLeft < 0) {
			this.switchToChick();
		} else {
			cdRect.width = 100 - 100 * timeLeft;
		}

		if (cursors.up.isDown) {
			this.jump();
		}

		let rightestX = 0;
		let i = 0;
		while (i < platformsList.length) {
			let platform = platformsList[i];
			platform.x -= speed * (deltaTime / 1000);
			if (rightestX < platform.x + platform.width / 2) {
				rightestX = platform.x + platform.width / 2;
			}
			if (platform.x <= - platform.width / 2) {
				platformsList.splice(i, 1);
				platform.destroy(true, true);
			} else {
				platform.refreshBody();
				i++;
			}
		}

		i = 0;
		while (i < starsList.length) {
			let star = starsList[i];
			star.x -= speed * (deltaTime / 1000);
			if (star.x <= - star.width / 2) {
				starsList.splice(i, 1);
				star.destroy(true, true);
			} else {
				i++;
			}
		}

		i = 0;
		while (i < enemiesList.length) {
			let enemy = enemiesList[i];
			enemy.x -= speed * (deltaTime / 1000);
			if (enemy.x <= - enemy.width / 2) {
				enemiesList.splice(i, 1);
				enemy.destroy(true, true);
			} else {
				i++;
			}
		}

		if (rightestX < 800) {
			lastPlatformRight = rightestX;
			//console.log(rightestX);
			this.createPlatform();
		}
	}

	jump() {
		if (!player.body.touching.down) {
			return;
		}
		player.setVelocityY(-400);
	}

	onResize(gameSize) {
		/*let width = gameSize.width;
		let height = gameSize.height;

		this.cameras.resize(width, height);

		this.shield.width = width;
		this.shield.height = height;*/
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
		}
	}

	collectEnemy(player, enemy) {
		enemiesList.splice(enemiesList.indexOf(enemy), 1);
		enemy.disableBody(true, true);
		enemy.destroy(true, true);
		if (isChick) {
			lives--;
			if (lives < 0) {
				this.gameOver();
			} else {
				this.removeLife();
			}
		} else {
			score++;
		}
	}

	gameOver() {
		game.scene.pause('game');
	}

	startEggMode() {
		console.log('egg mode');
		isChick = false;
		eggFinishTime = timeMS + eggDuration;
		this.txtEggMode.visible = true;
		player.anims.play('egg', true);
		// TODO switch to egg;
	}

	switchToChick() {
		if (isChick) return;
		eggParts = 0;
		console.log('chick mode');
		player.anims.play('right', true);
		eggFinishTime = 0;
		isChick = true;
		this.txtEggMode.visible = false;
	}

	removeLife() {
		// TODO remove live
	}
}