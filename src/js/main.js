// import EmblaCarousel from 'embla-carousel';
// import Autoplay from 'embla-carousel-autoplay';
import { addDotBtnsAndClickHandlers } from './embla-nav';
import { listen } from './utils';
import { enter, leave } from './transition';
import SwapAnimation from './animations/SwapAnimation';
import FlowAnimation from './animations/FlowAnimation';

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

	if(currentButton.dataset.value === newButton.dataset.value) return;

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

const exchangeRatesSection = document.getElementById('exchange-rates-section');
const exchangeRatesContainer = document.getElementById('exchange-rates-container');
const exchangeRatesAnimation = new SwapAnimation(exchangeRatesContainer, 1200);
exchangeRatesSection.addEventListener('pointerenter', () => { exchangeRatesAnimation.run() });
exchangeRatesSection.addEventListener('pointerleave', () => { exchangeRatesAnimation.stop() }); 

const transfersSection = document.getElementById('transfers-section');
const transfersContainer = document.getElementById('transfers-container');
const transfersAnimation = new FlowAnimation(transfersContainer, 2000);
transfersSection.addEventListener('pointerenter', () => { transfersAnimation.run() });
transfersSection.addEventListener('pointerleave', () => { transfersAnimation.stop() }); 

const anonPaymentsSection = document.getElementById('anon-payments-section');
const anonPaymentsContainer = document.getElementById('anon-payments-container');
const anonPaymentsAnimation = new FlowAnimation(anonPaymentsContainer, 2000);
anonPaymentsSection.addEventListener('pointerenter', () => { anonPaymentsAnimation.run() });
anonPaymentsSection.addEventListener('pointerleave', () => { anonPaymentsAnimation.stop() }); 