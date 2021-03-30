export default class Scrolly {
  /** Mets la bordure qui detecte quand un element entre dans la zone */
  constructor(element) {
    this.element = element;
    this.option = {
      rootMargin: '0px 0px 0px 0px',
    };
    this.init();
  }

  init() {
    /** observation si un objet entre dans la zone demander plus tot */
    this.observer = new IntersectionObserver(
      this.watch.bind(this),
      this.option
    );

    /** va chercher les data-scrolly pour savoir quel objet doit etre observer */
    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      this.observer.observe(item);
    }
  }
  watch(entries) {
    /** méthode qui active l'animation des elements et les faits jouer qu'une seule fois */
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
        this.observer.unobserve(target);
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
