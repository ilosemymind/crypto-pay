import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { addDotBtnsAndClickHandlers } from './embla-nav';
import { listen } from './utils';
import { enter, leave } from './transition';

const emblaNode = document.querySelector('#embla');
const dotsNode = document.querySelector('#embla-nav__dots');
const currentSlideCounterNode = document.querySelector('#embla-nav__current');

const options = { axis: "x", loop: true }

const emblaApi = EmblaCarousel(emblaNode, options, [Autoplay({ delay: 3000 })]);

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi, dotsNode, currentSlideCounterNode
);

emblaApi.on('destroy', removeDotBtnsAndClickHandlers);


async function selectStatisticsTimeframe(_, eventTrigger) {
	const currentButton = document.querySelector('.statistics-timeframe[data-active="true"]');
	const currentView = document.querySelector(`.statistics-view[data-value="${currentButton.dataset.value}"]`);

	const newButton = eventTrigger;
	const newView = document.querySelector(`.statistics-view[data-value="${newButton.dataset.value}"]`);

	currentButton.dataset.active = false;
	await leave(currentView, 'fade');
	currentView.ariaHidden = true;

	newButton.dataset.active = true;
	await enter(newView, 'fade');
	newView.ariaHidden = false;
}

listen('click', '.statistics-timeframe[data-value="all"]', selectStatisticsTimeframe);
listen('click', '.statistics-timeframe[data-value="today"]', selectStatisticsTimeframe);
listen('click', '.statistics-timeframe[data-value="yesterday"]', selectStatisticsTimeframe);
listen('click', '.statistics-timeframe[data-value="week"]', selectStatisticsTimeframe);
listen('click', '.statistics-timeframe[data-value="month"]', selectStatisticsTimeframe);