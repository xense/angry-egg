import "phaser";
import Models from "../models/Models";

export default class BaseScene extends Phaser.Scene {
	constructor(config) {
		super(config);
	}
	preload() {
		this.load.on(Phaser.Loader.Events.PROGRESS, value => {
			Models.events.emit("scene_progress", this.sys.config.key, value);
		}, this);
	}

	create() {
		/// call this only after overriding code body
		Models.events.emit("scene_created", this.sys.config.key);
	}
}