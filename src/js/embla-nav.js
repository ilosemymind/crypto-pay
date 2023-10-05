export const addDotBtnsAndClickHandlers = (
  emblaApi,
  dotsNode,
	currentSlideCounterNode,
  onButtonClick
) => {
  let dotNodes = [];

  const addDotBtnsWithClickHandlers = () => {
    dotsNode.innerHTML = emblaApi
      .scrollSnapList()
      .map(() => `
				<button 
					type="button"
					class="
						embla-nav__dot w-[82px] h-1 bg-gray-500 data-[active=true]:bg-aqua-500 rounded-full transition-colors durarion-50
					"
					data-active="false"
				></button>
			`)
      .join('')

    const scrollTo = (index) => {
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    }

    dotNodes = Array.from(dotsNode.querySelectorAll('.embla-nav__dot'))
    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener('click', () => scrollTo(index), false);
    })
  }

  const toggleDotBtnsActive = () => {
    const previous = emblaApi.previousScrollSnap()
    const selected = emblaApi.selectedScrollSnap()
    dotNodes[previous].dataset.active = false;
    dotNodes[selected].dataset.active = true;
		if(currentSlideCounterNode) currentSlideCounterNode.innerText = `0${emblaApi.selectedScrollSnap() + 1}`;
  }

  emblaApi
    .on('init', addDotBtnsWithClickHandlers)
    .on('reInit', addDotBtnsWithClickHandlers)
    .on('init', toggleDotBtnsActive)
    .on('reInit', toggleDotBtnsActive)
    .on('select', toggleDotBtnsActive)

  return () => {
    dotsNode.innerHTML = ''
  }
}
