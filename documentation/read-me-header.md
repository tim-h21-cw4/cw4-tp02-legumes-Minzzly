# Le Header

> _Le **header** contient la **navigation**, qui est un des éléments importants dans un site web. Dans ce projet, le header se cache quand l'utilisateur **scroll** et dès qu'il remonte, le header n'est plus caché._

<br>

## L'utilisation

<br>

Voici les fonctions des méthodes appliqués dans le _java-script_:

| Les méthodes        | Fonctions                                                    |
| ------------------- | :----------------------------------------------------------- |
| `onScroll`          | Detecte quand l'utilisateur scroll et appelle deux fonctions |
| `setHeaderState`    | Cache le header                                              |
| `setDirectionState` | Prendre la direction que l'utilisateur scroll                |
| `initNavMobile`     | Cherche le bouton hamburger pour clicker dessus              |
| `onToggleNav`       | Ouvre ou ferme la nav                                        |

<br>

## Les options Header

<br>

Deux **options** sont permit dans le `html` pour changer la façon que le `header` marche: `data-header-hide` et `data-header-scroll-limit`.

| Les options                | Fonctions                                                                           |
| -------------------------- | :---------------------------------------------------------------------------------- |
| `data-header-hide`         | Si le header se cache ("true") ou non ("false")                                     |
| `data-header-scroll-limit` | Mets une limit (px ou %) que l'utilisateur peut scroll avant que le header se cache |

<br>

```html
<div class="site-container">
  <header
    class="header"
    data-component="Header"
    data-header-hide="true"
    data-header-scroll-limit="0.1"
  ></header>
</div>
```

<br>

## Les classes

<br>

Le `header` est la composante qui a le plus de classes à ajouter dans `l'html` et que le `java-script` ajoute. Ces classes sont utilisé pour cacher le _`header`_, fonctionner le _`menu`_ et faire des _`animations`_.

| Les classes         |       Balise HTML        | Utilité                                      |
| ------------------- | :----------------------: | :------------------------------------------- |
| `header-is-hidden`  |           HTML           | Cache le header                              |
| `is-scrolling-down` |           HTML           | Detecte que l'utilisateur scroll par en-bas  |
| `is-scrolling-up`   |           HTML           | Detecte que l'utilisateur scroll par en-haut |
| `js-toggle`         | bouton du menu hamburger | Pour que le js le cherche                    |
| `nav-is-active`     |           HTML           | ouvre la navigation                          |

<br>

## Les animations

<br>

> _Tous les animations est fait dans le css avec des modifications et des transitions:_

1. Lorsque `l'html` reçoit la classe `nav-is-active`, il y a une animations qui part pour ouvrir la navigation du header dans la version **mobile**.

```css
.nav-is-active & {
  width: 100%;
  height: 100vh;
  opacity: 1;
  @media screen and (min-width: $breakpoint-md) {
    height: 100%;
  }
}
```

2. Ensuite, quand le `html` a la classe `header-is-hidden`, `is-scrolling-down` et **pas** la classe `nav-is-active`, une autre **animation** part pour le `header`.

```css
.nav-primary {
  width: 0;
  height: 0;
  opacity: 0;

  @media screen and (min-width: $breakpoint-md) {
    opacity: 1;
  }
  .nav-is-active & {
    width: 100%;
    height: 100vh;
    opacity: 1;
    @media screen and (min-width: $breakpoint-md) {
      height: 100%;
    }
  }
}
```
