'use strict';

const students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let studentName = prompt("Ingrese un nombre");

function findStudent(students, studentName) {
  if (students.includes(studentName)){
    return "Si se encuentra";
  }else{
    return "No se encuentra";
  }
}

alert(findStudent(students, studentName));

/* 
Dentro de la función findStudent, el método includes se utiliza 
para verificar si la matriz de los estudiantes 
incluye el nombre ingresado mediante un prompt.  
*/
