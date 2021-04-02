import Swiper from 'swiper/bundle';

  // init Swiper:
   export var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
        slidesPerView: 4,
      centeredSlides: true,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
   export var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  
