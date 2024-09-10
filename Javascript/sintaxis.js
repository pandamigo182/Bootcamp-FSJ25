console.log("Holis estoy imprimiendo en la consola");

// -- Operadores Matematicas --

let suma = 2+2;
let resta = 4-2;
let division = 135/5;
let multiplicacion = 1354*356;
let residuo = 10 % 2;

console.log(residuo);

// Concatenacion -> UNIR DOS VALORES y CUALQUIERA DE LOS DOS ES UN STRING
let sumaFalsa=2+"2";

console.log(sumaFalsa);

// -- Operadores Logicos --
// Ejecutamos comparaciones

//Igualdad == COMPARA SOLAMENTE EL VALOR DE LAS COSAS

let igualdad = 10 == "5";
console.log(igualdad);

//Igualdad Estricta === COMPARA EL VALOR DE LAS COSAS Y SU TIPO DE DATO

let igualdadEstricta = 10 === "10";
console.log(igualdadEstricta);

//Desigualdad

let Desigualdad = 10 != "10";
console.log(Desigualdad);

//Desigualdad Estricta !== COMPARAMOS SI LOS VALORES Y EL TIPO DE DATO SON DIFERENTES
let desigualdadEstricta = 10 !== "10";
console.log(desigualdadEstricta);

//Para que el operador AND me de TRUE ambas comparaciones tienen que dar TRUE

let operadorAND = 10 == "10" && 10 === "10";
console.log(operadorAND);

//

//Si algo se cumple sera TRUE

let operadorOR = 10 == "10" || 10 === "10";
console.log(operadorOR);

//Funciones

//Declaracion de funcion
// Una funcion es una porcion de codigo que hace algo en concreto
// Ventaja -> SE VUELVE REUTILIZABLE

/*
Feclaracion de funcion
Expresada
function PALABRA RESERVADA NECESARIA PARA DECLARAR UNA FUNCION
() sirven para recibir datos
{} Delimitadores del codigo de la funcion
*/

function nombreFuncion(){
    console.log("Hola mundo");
}

//Llamar o ejecutar una funcion
//Nombre()
nombreFuncion();

//TIPOS DE FUNCION
//TIPO VOID -> Vacia

function tipoVoid(){
    console.log("Hola mundo");
}

tipoVoid();

//Tipo Return -> Devuelven VALOR
function tipoReturn(){
    return "Hola mundo";
}

//tipoReturn();
//console.log(tipoReturn());

let ejecucion1 = tipoVoid();
let ejecucion2 = tipoReturn();
console.log(ejecucion1);
console.log(ejecucion2);
