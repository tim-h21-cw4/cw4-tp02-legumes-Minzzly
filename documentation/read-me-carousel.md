# Le Scrollytelling

> _Un carousel est utilisé pour groupé plusieurs éléments dans un espace limité. Du `java-script` est utilisé et une librairie `Swiper` est utilisé pour faire fonctionner le carousel._

<br>

## L'utilisation

<br>

Pour commencer, il faut installer une dépendance en écrivant dans le terminal `npm swiper`. C'est ensuite nécéssaire de suivre ces prochains étapes:

1. Dans le `java-script`, il faut ajouter un import:

```js
import Swiper from "swiper/bundle";
```

2. Il est ensuite nécéssaire d'importer dans le `main.scss` le fichier du **swiper**.

```css
@import "../../node_modules/swiper/swiper.scss";
```

3. S'il y a de la pagination ou du scrollbar, il faut aussi ajouter ces fichiers suivant dans le **main.scss**:

```css
@import "../../node_modules/swiper/components/pagination/pagination.scss";
@import "../../node_modules/swiper/components/scrollbar/scrollbar.scss";
```

<br>

Lorsque les bons fichiers sont installé, il faut avoir une structure **html** comme ceci:

```html
<div class="swiper-container">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```

<br>

Voici les datas utilisé pour faire fonctionner le **java-script** et rendre le carousel intéractible:

| Les datas        |       Balise HTML       | Utilité                                                     |
| ---------------- | :---------------------: | :---------------------------------------------------------- |
| `data-component` | sur le swiper-container | Pour chercher le carousel dans le js                        |
| `data-carousel`  | sur le swiper-container | Pour savoir le genre de carousel (changer la configuration) |

<br>

## Les configurations

<br>

1. Par défaut:

<br>

Dans la configuration par default, il faut mettre tous ce que les Carousels ont en commun. Dans le cas du projet, il y a le breakpoint, le loop, la navigation et la pagination.

```js
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /** activer la pagination */
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
};
```

<br>

2. Le split:

<br>

La configuration split n'est utilisé que pour garder le slides per view à 2.

```js
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
```

<br>

3. Le scroll:

<br>

La configuration scroll est utilisé pour ajouter le scrollbar dans le carousel.

```js
config = {
  ...this.defaultConfig /** viens chercher le defaultConfig */,
  ...{
    /** ajout de scrollbar dans le carousel*/
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  },
};
```
