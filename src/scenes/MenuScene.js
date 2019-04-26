import "phaser";
import BaseScene from "./BaseScene";
import UIMenu from "./ui/UIMenu";

export default class MenuScene extends BaseScene {
	constructor() {
		super({key: "menu"});
	}

	preload() {
		console.log("menu loading");

		this.load.json("ui_menu", "assets/ui/menu.json");

		super.create();
	}

	create() {
		console.log("menu creating");

		let menu_clip = this.add.ui_component(this.cache.get("ui_menu"), ["ui"]);
		let menu_proto = new UIMenu();
		menu_proto.appendClip(menu_clip);

		this.menu_clip = menu_clip;
		this.menu = menu_proto;

		game.scale.on(Phaser.Scale.Events.RESIZE, this.onResize, this);
		this.onResize(game.scale.gameSize);

		super.create();
	}

	onResize(gameSize) {
		let width = gameSize.width;
		let height = gameSize.height;

		this.cameras.resize(width, height);

		this.menu_clip.groupX = Math.floor(width / 2);
		this.menu_clip.groupY = Math.floor(height / 2);
	}
}