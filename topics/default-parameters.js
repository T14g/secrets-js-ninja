//Before ES6

function shirtColor(color){
    color = typeof color === 'undefined' ? 'Black' : color;

    return "The Shirt color is " + color;
}
console.log(shirtColor());
console.log(shirtColor('Green'));

//ES6
shirtColorES6 = (color = 'Black') => `Shirt color is ${color}`;
console.log(shirtColorES6());
console.log(shirtColorES6('Gray'));

