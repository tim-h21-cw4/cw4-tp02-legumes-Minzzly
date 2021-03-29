import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    /** La configuration par default pour les carousels */
    this.defaultConfig = {
      spaceBetween: 20,
      slidesPerView: 2,
      loop: true,

      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },

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
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
          },
        },
      };
    }

    if (this.element.dataset.carousel == 'scroll') {
      config = {
        ...this.defaultConfig,
        ...{
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
        },
      };
    }

    new Swiper(this.element, config);
  }
}
