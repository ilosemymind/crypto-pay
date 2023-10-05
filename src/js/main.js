import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { addDotBtnsAndClickHandlers } from './embla-nav';

const emblaNode = document.querySelector('#embla');
const dotsNode = document.querySelector('#embla-nav__dots');
const currentSlideCounterNode = document.querySelector('#embla-nav__current');

const options = { axis: "x", loop: true }

const emblaApi = EmblaCarousel(emblaNode, options, [Autoplay({ delay: 3000 })]);

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi, dotsNode, currentSlideCounterNode
);

emblaApi.on('destroy', removeDotBtnsAndClickHandlers);