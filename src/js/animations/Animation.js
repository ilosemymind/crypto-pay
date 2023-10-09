export default class Animation {
	#delay = 2000;
	#timer;

	constructor(delay) {
		if(delay) this.#delay = delay;
	}

	run(callback) {
		if(this.#timer) return;
		
		callback();

		this.#timer = setInterval(() => {
			callback();
		}, this.#delay);
	}

	stop() {
		if(this.#timer) {
			this.#timer = clearInterval(this.#timer);
		} 
	}
}