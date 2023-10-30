import Animation from './Animation';
import { getNextActiveIndex } from './utils';

export default class FlowAnimation extends Animation {
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
		const len = this.#items.length;
		const previousIndex = this.#activeIndex;
		this.#activeIndex = getNextActiveIndex(this.#activeIndex, len);

		for(var i = 0; i < len; i++) {
			const item = this.#items[i];

			if(i === this.#activeIndex) {
				item.addEventListener('animationend', () => {
					item.style.opacity = 1;
					item.style.zIndex = 1;
					item.style.scale = 1;
					item.style.transform = 'translateY(0%)';
					item.classList.remove('animate-flow-in');
				}, { once: true });

				item.classList.add('animate-flow-in');
			} else if (i === previousIndex) {
				item.addEventListener('animationend', () => {
					item.style.opacity = 0.25;
					item.style.zIndex = 0;
					item.style.scale = 0.9;
					item.style.transform = 'translateY(-15%)';
					item.classList.remove('animate-flow-out');
				}, { once: true });
	
				item.classList.add('animate-flow-out');
			}
		}
	}
}