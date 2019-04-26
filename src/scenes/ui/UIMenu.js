import "phaser-ui-comps";
import Models from "../../models/Models";

export default class UIMenu extends PhaserComps.UIComponents.UIComponentPrototype {

	constructor() {
		super();

		this.btnPlay = new PhaserComps.UIComponents.UIButton(this, "btn_play", "Play");
		this.btnPlay.on(PhaserComps.UIComponents.UIButton.EVENT_CLICK, this.onBtnPlay, this);

	}

	onBtnPlay() {
		console.log("play");

	}
}