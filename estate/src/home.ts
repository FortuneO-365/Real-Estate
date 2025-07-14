// import './style.css'
import '@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';

var slide1 = new Splide('#image-carousel', {
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
    768: {
      // destroy: 'completely',
    }, 
  },
})

var slide2 = new Splide('#prop-carousel', {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: 10,
  autoplay: true,
  interval: 7000,
  drag: true,
  pauseOnHover: false,
  pagination: true,
  arrows:false,
  mediaQuery: 'min',
  breakpoints: {
    1024: { perPage: 3 },
    640: { perPage: 2 },
  },
})

var bar = slide2.root.querySelector<HTMLDivElement>('.my-carousel-progress-bar')!;

slide2.on( 'mounted move', function () {
  var end  = slide2.Components.Controller.getEnd() + 1;
  var rate = Math.min( ( slide2.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );


const counters = Array.from(document.querySelectorAll<HTMLSpanElement>("counter")!);

function countUp() {
  if (counters !== null) {
    counters.forEach(counter => {
      const maxVal = parseInt(counter.innerText);
      let current = 0;
      const duration = 3000; 
      const interval = 10; 
      const startTime = Date.now();
      
      function updateCounter() {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= duration) {
          counter.innerText = maxVal.toString();
          return;
        }
        
        const progress = elapsedTime / duration;
        current = Math.floor(progress * maxVal);
        counter.innerText = current.toString();
        
        setTimeout(updateCounter, interval);
      }
      updateCounter();
    });
  }
}


document.addEventListener('DOMContentLoaded', () => {
  slide1.mount();
  slide2.mount();
  countUp();
});
