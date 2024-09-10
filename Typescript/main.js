//Declaracion de variable en JS
var variable = "Jairo";
//Declaracion de variable + TIPO DE DATO EN TS
var cadenaTexto = "Edwin";
var numeroEntero = 1;
var booleano = false;
//Declaracion de ARRAY  
var arraycito = ["asd", "sqf", "ase"];
var arrayNumerico = [11, 45, 16.5, 5];
//NUNCA UTILIZAR ESTO
//El type ANY deja pasar todo, pero, NO ES RECOMENDABLE
var arrayMalo = ["asd", 12, false];
//Array numerico o string
var arrayNumString = []; // Solo 1 de las dos declaraciones a la vez
var arrayNumStringMixto = [""]; //Acepta ambos sin importarle
//Declaracion de Tuplas
//Es un array con indices limitados y con sus tipo de dato declarado previamente
var datosUsuario;
datosUsuario = ["Jairo", 25]; //Solo se puede guardar 2 datos
//Funciones en TS
function tipoVoid() {
    console.log("Hola mundo");
}
function sumar() {
    return 5 + 5;
}
function sumarOConcatenar() {
    return 3 + 5;
}
function saludar(nombre) {
    //Template String -> Plantillas literales -> Ingresar un dato de JS en un String
    //"Hola como estas?"+nombre;
    return "Hola como estas? ".concat(nombre);
}
console.log(saludar("Edwin"));
