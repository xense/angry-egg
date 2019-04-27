import "phaser-ui-comps";
import Models from "../../models/Models";

export default class UIMenu extends PhaserComps.UIComponents.UIComponentPrototype {

	constructor() {
		super();

		this.btnPlay = new PhaserComps.UIComponents.UIButton(this, "btn_play", "Play");
		this.btnPlay.on(PhaserComps.UIComponents.UIButton.EVENT_CLICK, this.onBtnPlay, this);

		this.btnFullscreen = new PhaserComps.UIComponents.UIButton(this, "btn_fullscreen", "FullScreen");
		this.btnFullscreen.on(PhaserComps.UIComponents.UIButton.EVENT_CLICK, this.onBtnFullscreen, this);

		this.updateScore();
	}

	onBtnPlay() {
		console.log("play");
		game.scene.pause('menu');
		game.scene.stop('game');
		game.scene.start('game');

		Models.events.on('score', this.updateScore, this);
	}

	updateScore() {
		this.setText('txt_score', Models.score.toString());
	}

	onBtnFullscreen() {
		game.scale.toggleFullscreen();
	}
}