import Animation from './Animation';
import { getNextActiveIndex } from './utils';

export default class SwapAnimation extends Animation {
	#items = [];
	#activeIndex = 0;

	constructor(container, delay) {
		super(delay);

		this.#items = container.children;
	}

	run() {
		super.run(this.animate);
	}

	animate = () => {
		const len = this.items.length;
		this.#activeIndex = getNextActiveIndex(this.#activeIndex, len);

		for(var i = 0; i < len; i++) {
			const item = this.#items[i];
			const zIndex = (this.#activeIndex + len - i) % len;
			const xOffset = (100 / len) * zIndex;

			item.style.transform = `translateX(${xOffset}%)`;
			item.style.zIndex = zIndex;
		}
	}
}