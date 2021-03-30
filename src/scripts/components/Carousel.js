import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    /** La configuration par default pour les carousels */
    this.defaultConfig = {
      spaceBetween: 20 /** espacement entre les swiper-slides */,
      slidesPerView: 2 /** slides per view dans la version mobile */,
      loop: true /** pour looper les caroussels */,

      /** breakpoint pour quand la fenetre arrive à minimum 768px (donc version desktop) */
      breakpoints: {
        768: {
          slidesPerView: 4 /** slides per view pour la version desktop */,
        },
      },

      /** activer la navigation */
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      /** activer la pagination */
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
        ...this.defaultConfig /** viens chercher le defaultConfig */,
        ...{
          /** modification du breakpoint pour que lesslides per view sois à 2 au lieu de 4 */
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
        ...this.defaultConfig /** viens chercher le defaultConfig */,
        ...{
          /** ajout de scrollbar dans le carousel*/
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
        },
      };
    }

    /** appelle la class Swiper avec les parametres */
    new Swiper(this.element, config);
  }
}
