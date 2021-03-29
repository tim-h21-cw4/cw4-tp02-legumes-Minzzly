import Utils from '../utilities/Utils';

export default class Modal {
  constructor(element) {
    this.element = element;
    this.modalId = this.element.dataset.modalId;
    this.init();
  }

  init() {
    this.element.addEventListener('click', this.open.bind(this));

    this.close = this.close.bind(this);
  }

  updateContent() {
    if (this.modalId == 'tpl-modal-legumes') {
      this.modalElement.innerHTML = Utils.parseTemplate(
        this.modalElement.innerHTML,
        {
          title: this.element.dataset.modalTitle,
          source: this.element.dataset.modalSource,
        }
      );
    }
  }

  open(event) {
    event.preventDefault();
    this.backgroundModal(this.element);
    this.appendModal();
  }

  close(event) {
    if (event.keyCode != null && event.keyCode != 27) {
      return;
    }

    document.documentElement.classList.remove('modal-is-active');
    this.closeButton.removeEventListener('click', this.close.bind(this));
    document.removeEventListener('keydown', this.close);

    setTimeout(this.destroy.bind(this), 1000);
  }

  destroy() {
    this.modalElement.parentElement.removeChild(this.modalElement);
  }

  backgroundModal(cible) {
    this.couleurBg = window
      .getComputedStyle(cible, null)
      .getPropertyValue('background-color');
  }

  appendModal() {
    const template = document.querySelector(`#${this.modalId}`);

    if (template) {
      this.modalElement = template.content.firstElementChild.cloneNode(true);

      this.content = this.modalElement.querySelector('.modal_content');
      this.content.style.backgroundColor = this.couleurBg;

      this.updateContent();

      document.body.appendChild(this.modalElement);

      this.element.getBoundingClientRect();
      document.documentElement.classList.add('modal-is-active');

      this.closeButton = this.modalElement.querySelector('.js-close');
      this.closeButton.addEventListener('click', this.close);
    } else {
      console.log(`La <template> avec le id ${this.modalId} n'existe pas`);
    }
    document.addEventListener('keydown', this.close);
  }
}
