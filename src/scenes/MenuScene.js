import "phaser";
import BaseScene from "./BaseScene";
import UIMenu from "./ui/UIMenu";

export default class MenuScene extends BaseScene {
	constructor() {
		super({key: "menu"});
	}

	preload() {
		console.log("menu loading");
		super.create();
	}

	create() {
		console.log("menu creating");
		this.add.image(0, 0, 'par_0').setOrigin(0);
		this.add.image(0, 0, 'par_1').setOrigin(0);
		this.add.image(0, 0, 'par_2').setOrigin(0);
		this.add.image(0, 0, 'par_3').setOrigin(0);
		this.add.image(1920 / 2, 970, 'atlas', 'platform1')//.setOrigin(0);

		let menu_clip = this.add.ui_component(this.cache.json.get("ui_menu"), ["atlas"]);
		menu_clip.groupX = Math.floor(1920 / 2);
		menu_clip.groupY = Math.floor(1080 / 2);
		let menu_proto = new UIMenu();
		menu_proto.appendClip(menu_clip);

		this.menu_clip = menu_clip;
		this.menu = menu_proto;

		/*game.scale.on(Phaser.Scale.Events.RESIZE, this.onResize, this);
		this.onResize(game.scale.gameSize);*/

		super.create();

		this.cameras.main.fadeFrom(300, 0, 0, 0);
	}

	/*onResize(gameSize) {
		let width = gameSize.width;
		let height = gameSize.height;

		this.cameras.resize(width, height);

		this.menu_clip.groupX = Math.floor(width / 2);
		this.menu_clip.groupY = Math.floor(height / 2);
	}*/
}