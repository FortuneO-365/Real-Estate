import '@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';

var slide1 = new Splide('#choice-carousel', {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 3500,
  drag: true,
  pauseOnHover: false,
  pagination: false,
  arrows:false,
  mediaQuery: 'min',
  breakpoints: {
    640: {
      perPage : 2,
    }, 
    1024: {
      perPage: 3,
    }
  },
})

var slide2 = new Splide('#customer-carousel', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3500,
    drag: true,
    pauseOnHover: false,
    pagination: false,
    arrows:false,
    mediaQuery: 'min',
    breakpoints: {
      1024: {
        perPage: 2
      },
    },
})

var slide3 = new Splide('#team-carousel', {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 5000,
  drag: true,
  pauseOnHover: false,
  pagination: false,
  arrows:false,
  mediaQuery: 'min',
  breakpoints: {
    640: {
      perPage : 2,
    }, 
    1024: {
      perPage: 3,
    }
  },
})

document.querySelector<HTMLButtonElement>('.splide__arrow--prev')!.addEventListener('click', () => {
    slide2.go('-1'); // Move to previous slide
});

document.querySelector<HTMLButtonElement>('.splide__arrow--next')!.addEventListener('click', () => {
    slide2.go('+1'); // Move to next slide
});

document.querySelector<HTMLButtonElement>('.splide__arrow--prev1')!.addEventListener('click', () => {
  slide3.go('-1'); // Move to previous slide
});

document.querySelector<HTMLButtonElement>('.splide__arrow--next1')!.addEventListener('click', () => {
  slide3.go('+1'); // Move to next slide
});

document.addEventListener('DOMContentLoaded', () => {
    slide1.mount();
    slide2.mount();
    slide3.mount();
});