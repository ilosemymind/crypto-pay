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



// import viteLogo from '/vite.svg'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
