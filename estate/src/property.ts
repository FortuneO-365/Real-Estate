import '@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';

var main = new Splide( '#main-slider', {
    type: 'fade',
    perPage: 1,
    pagination : false,
    arrows: false,
    cover: true,
    heightRatio: 2
});
  
var thumbnails =  new Splide( '#thumbnail-slider', {
    perPage: 4,
    gap: 10,
    rewind: true,
    pagination: false,
} );
  

document.addEventListener( 'DOMContentLoaded', function () {
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
});