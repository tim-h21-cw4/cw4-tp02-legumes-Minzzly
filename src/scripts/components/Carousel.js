import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    /** La configuration par default pour les carousels */
    this.defaultConfig = {
      spaceBetween: 20,
      slidesPerView: 5,
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    };
    this.init();
  }

  init() {
    let config = this.defaultConfig;

    if (this.element.dataset.carousel == 'split') {
      config = {
        ...this.defaultConfig,
        ...{
          slidesPerView: 5,
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 5,
            },
          },
        },
      };
    }

    new Swiper(this.element, config);
  }
}
