/*
EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario 
devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición 
el operador ternario.
*/

function checkAge(edad) {
    return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
}

let edad = parseInt(prompt("Ingrese su edad: "));
console.log(checkAge(edad));