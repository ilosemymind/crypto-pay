import Animation from './Animation';
import anime from 'animejs/lib/anime.es.js';

export default class FlowAnimation extends Animation {
	container;
	items = [];
	activeIndex = 0;

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
		const previousIndex = this.activeIndex;
		this.activeIndex = this.getNextActiveIndex(this.activeIndex, len);

		for(var i = 0; i < len; i++) {
			const item = this.items[i];

			if(i === this.activeIndex) {
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

	getNextActiveIndex(current, size) {
		return (current + 1) % size;
	}
}