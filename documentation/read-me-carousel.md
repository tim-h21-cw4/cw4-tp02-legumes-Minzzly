# Le Scrollytelling

> _Un scrollytelling c'est l'utilisation d'objets comme des images, textes ou vidéos avec des animations qui part lorsque l'utilisateur **scroll** dans le site._

<br>

## L'utilisation

<br>

Pour commencer, il faut afficher une zone qui s'appelle _l'Observer_. Le seul paramètre important est le **_rootMargin_** qui modifie la zone (en px ou %).

```js
this.option = {
  rootMargin: "0px 0px 0px 0px",
};
```

<br>

Ensuite il y a une méthode pour **surveiller** ce qui entre et sort de la zone. Pour que cette méthode marche, il faut chercher les objets qui vont entrer. Dans le html, il y a un `data-component` qui est placé sur le parent des objets et un `data-scrolly` qui est placé sur l'objet qui va être **animé**.

```html
<div class="wrapper" data-component="Scrolly">
  <h1 data-scrolly="FlipfromBottom">
    Pousse pousse pousse<br />Les bons gros légumes
  </h1>
</div>
```

<br>

## Les animations

<br>

Voici les `data-scrolly` qui sont utilisé pour jouer les animations dans le site web:

| Les data-scrolly | L'animation                                |
| ---------------- | :----------------------------------------- |
| `FlipfromLeft`   | Fait une animation de rotation sur le côté |
| `FlipfromBottom` | Fait une animation de rotation par le bas  |

<br>

Les **animations** sont fait par du code css sur les balises de l'élément qui doit être animé. En selectionant le `data-scrolly`, on peut y ajouter n'importe quel modification avec une `transition` pour faire l'animation.

```css
[data-scrolly="FlipfromBottom"] {
  opacity: 0;
  transition: all 0.8s ease-out;
  transform: rotateX(90deg);
  &.is-active {
    opacity: 1;
    transform: rotateX(0deg);
  }
}
```

<br>

## Les classes

<br>

Dans la méthode `watch`, une class est enlever ou ajouter selon la situation plus bas. De plus, elle n'est plus **observer** quand l'objet est sorti de la zone pour jouer l'animation _qu'une seule fois_.

```js
if (entry.isIntersecting) {
  target.classList.add("is-active");
  this.observer.unobserve(target);
} else {
  target.classList.remove("is-active");
}
```

| Les classes |          Balise HTML          | Utilité                                                                |
| ----------- | :---------------------------: | :--------------------------------------------------------------------- |
| `is-active` | sur l"objet qui va être animé | S'ajoute quand l'objet est entrer dans la zone, s'enlève quand ça sort |
