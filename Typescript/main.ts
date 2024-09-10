//Declaracion de variable en JS
let variable ="Jairo";

//Declaracion de variable + TIPO DE DATO EN TS
let cadenaTexto : string = "Edwin";
let numeroEntero : number = 1;
let booleano : boolean = false;

//Declaracion de ARRAY  
let arraycito: string[] =["asd","sqf","ase"];

let arrayNumerico:number[]=[11,45,16.5,5];

//NUNCA UTILIZAR ESTO
//El type ANY deja pasar todo, pero, NO ES RECOMENDABLE
let arrayMalo:any[] = ["asd",12,false];

//Array numerico o string
let arrayNumString: string[] | number[] = [] // Solo 1 de las dos declaraciones a la vez
let arrayNumStringMixto:(number|string)[] = [""]; //Acepta ambos sin importarle

//Declaracion de Tuplas
//Es un array con indices limitados y con sus tipo de dato declarado previamente
let datosUsuario:[string,number];
datosUsuario=["Jairo",25]; //Solo se puede guardar 2 datos

//Funciones en TS
function tipoVoid():void {
    console.log("Hola mundo");
}

function sumar():number{
    return 5+5;
}

function sumarOConcatenar():number|string{
    return 3+5;
}

function saludar(nombre:string):string{
    //Template String -> Plantillas literales -> Ingresar un dato de JS en un String
    //"Hola como estas?"+nombre;
    return `Hola como estas? ${nombre}`;
}

console.log(saludar("Edwin"));