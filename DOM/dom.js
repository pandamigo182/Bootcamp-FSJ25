console.log("Estoy andando soy Dominic");


//Agarrar un elemento del DOM
let elementoDOM = document.getElementById('textoSaludo');
console.log(elementoDOM);

//Propiedades mas utilizadas
//Extrae todo el contenido HTML de la etiqueta
console.log(elementoDOM.innerHTML); 
//Extrae todo el contenido de TEXTO de la etiqueta
console.log(elementoDOM.innerText);

elementoDOM.innerText = "Te cambie desde el JS"
console.log(elementoDOM.innerHTML);
elementoDOM.innerHTML = "<span>Cambie otra vez</span>"
console.log(elementoDOM.innerHTML);


//Agarrar otro elemento del HTML
const contenido = document.querySelector('#content')
console.log(contenido);

contenido.innerHTML = '<article><h1> Ingresado desde JS</h1> <h2>Y soy el hermano</h2></article> '
console.log(contenido);

/*
    Realiza una funcion que reciba un array NUMERICO y retorne un array completamente nuevo solamente con los numeros que sean multiplo de 3 y que la suma de todos sus numeros de menos de 100.
*/


//Agarramos el boton
const btnApretable = document.getElementById('btnMagia');

btnApretable.addEventListener('click', () => {
        alert('Avada kedavra');
        console.log("Despues del alert, COPPERFIELD");
        
})

function apretandoBoton(){
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Ingesa tu apellido");
    alert(nombre +" "+ apellido);
}

//camelcase
function cambiandoInput(e){
    console.log(e.target.value);

    console.log("Cambie");
    
}

//filtrar multiplos de 3

/*
function filtrarMultiplosDeTres(arr){
    let resultado = []
    let suma;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            resultado.push(arr[i])
            suma += arr[i];
            }
            }
            if (suma < 100) {
                return resultado;
                } else {
                    return "La suma de los multiplos de 3 es mayor a 100";
                    }                
    }
*/

function filtrarMultiplosDeTres(arr){
    if(arr.length <=1) return arr; //confirmacion que tenga + de 1 dato - length cuenta los datos
    let resultado = [];
    let suma = 0;
    let i=0;

    while(i<arr.length){
        if(arr[i]%3===0){ //se valida la operacion sera multiplo de 3
            suma += arr[i];
            if(suma<100){
                resultado.push(arr[i]); //se valida el resultado y se suma con el contador
            }else{
                return resultado; //Si se ocupa return no se ocupa break y viceversa
            }
        }
        i++; //contador
    }
    return resultado;
}

let array =[12,9,21,33,45,50,17,11]; //matriz de numeros 
console.log(filtrarMultiplosDeTres(array));