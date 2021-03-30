# Les fenêtres modals

> _Une **fenêtres modals** est un élément qui apparait lorsqu'on clique sur un autre élément comme un bouton, une image, du texte, etc... La **fenêtre modal** prend généralement toute l'espace de l'écran pour voir L'élément cliquer en plus gros, mais peut être utilisé pour autre chose._

<br>

## L'utilisation

<br>

Pour commencer, il va avoir plusieurs **méthodes** pour faire fonctionner le javascript; `updateContent`, `open`, `close`, `destroy`, `backgroundModal` et `appendModal`.

| Les méthodes      | Fonction                                                                            |
| ----------------- | :---------------------------------------------------------------------------------- |
| `updateContent`   | Prend des datas ajouter dans l'html pour changer le contenu de la modal             |
| `open`            | Appelle la fonction backgroundModal et appendModal après avoir cliqué sur l'élément |
| `close`           | Ferme la modal et appelle la méthode destroy                                        |
| `destroy`         | Détruit le code inutile dans le html c'est-à-dire la modal                          |
| `backgroundModal` | Cherche le background de l'élément cliqué                                           |
| `appendModal`     | Ajoute tous ce qui est nécéssaire pour faire apparaitre la modal                    |

<br>

## Les classes

<br>

Quelques **classes** sont dans le html ou qui sont ajoutés avec du java-script pour faire fonctionner la modal comme il faut:

| Les classes       |   Balise HTML   | Utilité                                    |
| ----------------- | :-------------: | :----------------------------------------- |
| `modal-is-active` |      HTML       | S'ajoute pour faire apparaitre la modal    |
| `js-close`        | le button close | le js chercher le bouton avec cette classe |

<br>

## Les animations

<br>

Avec la class `modal-is-active`, on peut animer la modal avec du _css_ avec des modifications et des transitions.

```css
.modal_scrim {
  opacity: 0;
  transition: opacity 0.8s $ease-out-circ;
  .modal-is-active & {
    opacity: 0.8;
  }
}
```
