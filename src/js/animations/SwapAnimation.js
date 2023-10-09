import Animation from './Animation';

export default class SwapAnimation extends Animation {
	container;
	items = [];
	activeIndex = -1;

	constructor(container, delay) {
		super(delay);

		this.container = container;
		this.items = container.children;
	}

	run() {
		super.run(this.animate);
	}

	stop() {
		super.stop();
	}

	animate = () => {
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