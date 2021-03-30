/** importation du fichier important pour le code */
import ComponentFactory from './ComponentFactory';

class Main {
  /** le construtor de la class Main */
  constructor() {
    this.init();
  }

  /** méthode pour appeler la class Component Factory qui est dans le fichier ComponentFactory */
  init() {
    document.documentElement.classList.add('has-js');

    new ComponentFactory();
  }
}
/** appelle de la class Main */
new Main();
