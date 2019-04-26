import "phaser";
import BaseScene from "./BaseScene";

export default class HUDScene extends BaseScene {
	constructor() {
		super({key: "hud"});
	}

	preload() {
		super.preload();

	}

	create() {
		game.scale.on(Phaser.Scale.Events.RESIZE, this.onResize, this);
		this.onResize(game.scale.gameSize);

		super.create();
	}

	onResize(gameSize) {
		let width = gameSize.width;
		let height = gameSize.height;

		this.cameras.resize(width, height);

		//this.menu_clip.groupX = Math.floor(width / 2);
		//this.menu_clip.groupY = Math.floor(height / 2);
	}
}