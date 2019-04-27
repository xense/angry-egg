import "phaser";
import BaseScene from "./BaseScene";

export default class PreloaderScene extends BaseScene {
	constructor() {
		super({key: "preloader"});
	}

	preload() {
		console.log("preloader loading");

		// TODO preload preloader assets

		this.load.image('par_3', 'assets/par/Forest-01-002.png');
		this.load.image('par_2', 'assets/par/Forest-01-003.png');
		this.load.image('par_1', 'assets/par/Forest-01-004.png');
		this.load.image('par_0', 'assets/par/Forest-01-005.png');


		this.load.multiatlas('atlas', 'assets/atlas.json', "assets/");
		this.load.json("ui_menu", "assets/menu.json");
		this.load.json('btn', 'assets/btn_red.json');
		this.load.spritesheet('dude', 'assets/dude1.png', { frameWidth: 41, frameHeight: 61 });


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
		//game.scene.start("game");
		game.scene.start("menu");

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

