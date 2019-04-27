import "phaser";

let _events = null;
let bestScore = 0;

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

	static get score()  {
		return bestScore;
	}

	static set score(value) {
		bestScore = value;
		_events.emit('score', value);
	}

}