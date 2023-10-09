export default class SwapAnimation {
	container;
	items = [];
	delay = 2000;
	timer = null;
	activeIndex = 0;

	constructor(container, delay) {
		this.container = container;
		this.items = container.children;
		
		if(delay) this.delay = delay;
	}

	run() {
		if(this.timer) return;
		
		this.animate();

		this.timer = setInterval(() => {
			this.animate();
		}, this.delay);
	}

	stop() {
		if(this.timer) {
			this.timer = clearInterval(this.timer);
		} 
	}

	animate() {
		const len = this.items.length;
		this.activeIndex = this.getNextActiveIndex(this.activeIndex, len);

		for(var i = 0; i < len; i++) {
			const item = this.items[i];
			const zIndex = (this.activeIndex + len - i) % len;
			const xOffset = (100 / len) * zIndex;

			item.style.transform = `translateX(${xOffset}%)`;
			item.style.zIndex = zIndex;
		}
	}

	getNextActiveIndex(current, size) {
		return (current + 1) % size;
	}
}