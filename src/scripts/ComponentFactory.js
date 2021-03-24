/** Importe les scripts necessaires pour ce ficher JS */
import Scrolly from './components/Scrolly';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import Header from './components/Header';

//Code commence ici
export default class ComponentFactory {
  constructor() {
    this.componentList = {
      Scrolly,
      Carousel,
      Modal,
      Header,
    };
    this.init();
  }

  init() {}
}
