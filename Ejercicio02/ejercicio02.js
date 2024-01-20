`use strict`

const phrase = "La programacion web es fundamental para el progreso";
let words = phrase.split(" ");

alert(words);

alert (`La frase tiene ${words.length} palabras`);

/*
se utiliza el método split en la constante phrase 
para dividirla en un array de palabras. 
El argumento que se pasa al método split es un espacio (" "), 
lo que significa que la cadena se dividirá 
en cada lugar donde se encuentre un espacio.
*/ 
