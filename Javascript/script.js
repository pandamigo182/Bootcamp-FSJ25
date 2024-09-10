//Imprimir todas las posiciones de un array numerico
function recorrerArray(){

    for(let numero = 0; numero< array.length;numero++){
        console.log(array[numero]);
    }
}

//Array es un tipo de dato ordenado
//Siempre empieza de la posicion 0 indiferente el valor 
//Al buscar los bucles generalmente la variable es declarada con i

let array=[1,2,3,4];
recorrerArray(array);
//console.log(array[array]);

//Recorrer un array y devolver un array con los numeros pares

function numParesArray(arr){
    let i = 0;
    let arrayAux = []; //Array donde guardamos los numeros pares

    if(arr.length == 0){ //Validamos si el array tiene DATOS
        return arr; //Devolvemos un array vacio
    }

    while(i<arr.length){
        if(arr[i]%2 == 0){ //Validamos si el numero es par
            console.log(arr[i]);
            arrayAux.push(arr[i]); //Guardamos el numero par en el arrayAux
        }
        i++;
    }
    return arrayAux;
}

let arraycito=[1,2,3,4,5,6,7,8];
numParesArray(arraycito);