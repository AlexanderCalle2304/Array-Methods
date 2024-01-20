`use strict`

let words = ["La", "programacion", "web", "es", "fundamental", "para", "el", "progreso"];
let wordleght = words. filter(item => item.length > 3);

alert(wordleght);

/*
Aquí, se utiliza el método filter en el array words
para crear un nuevo array que contiene solo 
los elementos que cumplen con una condición 

La condición se define como una función de flecha
(item => item.length > 3) que se pasa como argumento al método filter.
devuelve true si la longitud de la palabra es mayor a 3 y false en caso contrario.
Solo los elementos que devuelven true se agregan al nuevo array.
*/
