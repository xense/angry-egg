import BaseScene from "./BaseScene";

export default class BootScene extends BaseScene {

	constructor() {
		super({key: "boot"});
	}

	preload() {
		console.log("boot loading");

		super.preload();
	}

	create() {
		super.create();
		console.log("boot creating");

		game.scene.start("preloader");

	}
}