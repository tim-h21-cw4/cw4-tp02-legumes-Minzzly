export default class Header {
  constructor(element) {
    /** les variables necessaires pour la class Header */
    this.element = element; /** prend les datas dans les html */
    this.scrollPosition = 0; /** prend la scroll position dans la page web */
    this.scrollLimit = this.element.dataset.headerScrollLimit; /** le pourcentage de la page que l'utilisateur scroll avant que le header réaparait (va chercher le pourcentage dans le fichier html)*/
    this.headerHide = this.element.dataset.headerHide; /** une option qui peut etre changer dans le fichier html si le header ce cache ou pas */
    this.lastScrollPosition = 0; /** cherche la derniere position du scroll */
    this.html = document.documentElement;

    this.init();
    this.initNavMobile();
  }

  init() {
    /** ajoute un évenement qui surveille le scroll */
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(event) {
    this.lastScrollPosition = this.scrollPosition; /** change la variable scroll pour la position actuel */
    this.scrollPosition =
      document.scrollingElement.scrollTop; /** cherche le scroll actuel */

    /** appelle les méthodes suivantes */
    this.setHeaderState();
    this.setDirectionState();
  }
  setHeaderState() {
    /** si le headerHide est mis à "true", elle exécute la méthode */
    if (this.headerHide == 'true') {
      const scrollHeight =
        document.scrollingElement
          .scrollHeight; /** cherche la hauteur du scroll */

      /** si le scroll Position et plus haut que le scrollHeight, l'html recoit la class header-is-hidden. sinon, la class est enlever */
      if (this.scrollPosition > scrollHeight * this.scrollLimit) {
        this.html.classList.add('header-is-hidden');
      } else {
        this.html.classList.remove('header-is-hidden');
      }
    }
  }

  setDirectionState() {
    /** si la scrollPosition est plus grand ou egal au lastScrollPosition, l'html recoit le is-scrolling-down et enleve is-scrolling-up. sinon c'est l'inverse */
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }

  initNavMobile() {
    /** methode qui appelle la méthode onToggleNav losqu'on clique sur le boutton avec la class js-toggle */
    const toggle = this.element.querySelector('.js-toggle');

    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  onToggleNav(event) {
    /** ajout la class nav-is-active lorsque le bouton du menu et cliquer */
    this.html.classList.toggle('nav-is-active');
  }
}
