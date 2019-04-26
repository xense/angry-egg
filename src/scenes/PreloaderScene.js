import "phaser";
import BaseScene from "./BaseScene";

export default class PreloaderScene extends BaseScene {
	constructor() {
		super({key: "preloader"});
	}

	preload() {
		console.log("preloader loading");

		// TODO preload preloader assets
		this.load.image('player', 'assets/ico_wizard.png');
		this.load.image('platform', 'assets/platform.png');
		this.load.image('star', 'assets/star.png');
		this.load.image('bomb', 'assets/bomb.png');
		this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });


		this.shield = this.add.rectangle(0, 0, 100, 100, 0x0)
			.setOrigin(0);
			//.setAlpha(.5);

		// listen to scale
		game.scale.on(Phaser.Scale.Events.RESIZE, this.onResize, this);
		this.onResize(game.scale.gameSize);

		super.preload();
	}

	create() {
		console.log("preloader creating");

		// TODO init scenes
		game.scene.start("game");
		//game.scene.start("");

		super.create();
	}

	onResize(gameSize) {
		let width = gameSize.width;
		let height = gameSize.height;

		this.cameras.resize(width, height);

		this.shield.width = width;
		this.shield.height = height;
	}
}
