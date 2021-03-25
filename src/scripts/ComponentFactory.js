/** Importe les scripts necessaires pour ce ficher JS */
import Scrolly from './components/Scrolly';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import Header from './components/Header';

//Code commence ici
export default class ComponentFactory {
  /** componentList liste les noms des methodes */
  constructor() {
    this.componentList = {
      Header,
      Scrolly,
      Carousel,
      Modal,
    };
    this.init();
  }

  init() {
    /** prend tous les data-components dans le document html */
    const components = document.querySelectorAll('[data-component]');

    /** une boucle qui prend tous les data-components pour creer des elements */
    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      /** verifie si le nom d'un component est le meme que la methode, si non, il y a un message dans la console qui dit que la composante n'existe pas */
      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
