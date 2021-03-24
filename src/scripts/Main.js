import ComponentFactory from './ComponentFactory';

class Main {
  constructor() {}

  init() {
    document.documentElement.classList.add('has-js');

    new ComponentFactory();
  }
}
new Main();
