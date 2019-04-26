import "phaser";

let _events = null;

export default class Models {

	/**
	 * @return Phaser.Events.EventEmitter;
	 */
	static get events() {
		if (_events === null) {
			_events = new Phaser.Events.EventEmitter();
		}
		return _events;
	}

}