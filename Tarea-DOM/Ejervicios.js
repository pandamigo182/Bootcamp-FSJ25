//Ejercicio 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
function esMayorDeEdad(edad) {
    return edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
}  
let edad = prompt("Ingrese su edad:");
console.log(esMayorDeEdad(edad));

//Ejercicio 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: Examen = 20%, tareas = 40%, asistencia = 10%, investigación = 30%. Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.

function calcularNotaFinal(examen, tareas, asistencia, investigación) {
    let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigación * 0.3);
    return notaFinal;
}
let alumno = prompt("Ingrese su nombre:");
let carnet = prompt("Ingrese su carnet:");
let examen = parseFloat(prompt("Ingrese la nota del examen:"));
let tareas = parseFloat(prompt("Ingrese la nota de las tareas:"));
let asistencia = parseFloat(prompt("Ingrese la nota de asistencia:"));
let investigación = parseFloat(prompt("Ingrese la nota de investigación:"));

let notaFinal = calcularNotaFinal(examen, tareas, asistencia, investigación);

console.log(`Nombre: ${alumno}`);
console.log(`Carnet: ${carnet}`);
console.log(`Nota final: ${notaFinal.toFixed(2)}`);

//Ejercicio 3: Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.

function calcularAumento(empleado, salario, categoria) {
    let aumento = 0;
    switch (categoria) {
    case "A":
        aumento = salario * 0.15;
        break;
    case "B":
        aumento = salario * 0.3;
        break;
    case "C":
        aumento = salario * 0.1;
        break;
    case "D":
        aumento = salario * 0.2;
        break;
    default:
        console.log("Categoría no válida");
        return;
    }
    console.log(`Nombre: ${empleado}`);
    console.log(`Salario: ${salario}`);
    console.log(`Aumento: ${aumento.toFixed(2)}`);
}

let empleado = prompt("Ingrese su nombre:");
let salario = parseFloat(prompt("Ingrese su salario:"));
let categoria = prompt("Ingrese su categoría (A, B, C o D):");

calcularAumento(empleado, salario, categoria);

//Ejercicio 4: Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.

function mayorDeDosNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
console.log(`El número mayor es: ${mayorDeDosNumeros(num1, num2)}`);

//Ejercicio 5: Realizar una función para una tienda de coches en donde se deberá calcular: Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario.

function calcularDescuento(coche) {
    let descuento = 0;
    switch (coche) {
    case "FORD FIESTA":
        descuento = 0.05;
        break;
    case "FORD FOCUS":
        descuento = 0.1;
        break;
    case "FORD ESCAPE":
        descuento = 0.2;
        break;
    default:
        console.log("Coche no válido");
        return;
    }
    return descuento;
}
let coche = prompt("Ingrese el coche (FORD FIESTA, FORD FOCUS o FORD ESCAPE):");
let precio = parseFloat(prompt("Ingrese el precio del coche:"));
let descuento = calcularDescuento(coche);

console.log(`Coche seleccionado: ${coche}`);
console.log(`Precio original: ${precio}`);
console.log(`Descuento: ${descuento * 100}%`);
console.log(`Precio con descuento: ${precio * (1 - descuento)}`);

// Mostrar en HTML
document.write(`<h1>Coche seleccionado: ${coche}</h1>`);
document.write(`<p>Precio original: ${precio}</p>`);
document.write(`<p>Descuento: ${descuento * 100}%</p>`);
document.write(`<p>Precio con descuento: ${precio * (1 - descuento)}</p>`);

//Ejercicio 6: Crear una función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.

function calcularDescuentoViaje(origen, destino) {
    let descuento = 0;
    if (origen === "Palma") {
    switch (destino) {
        case "La costa del Sol":
        descuento = 0.05;
        break;
        case "Panchimalco":
        descuento = 0.1;
        break;
        case "Puerto el Triunfo":
        descuento = 0.15;
        break;
        default:
        console.log("Destino no válido");
        return;
    }
    } else {
    console.log("Origen no válido");
    return;
    }
    return descuento;
}
let origen = prompt("Ingrese el origen (Palma):");
let destino = prompt("Ingrese el destino (La costa del Sol, Panchimalco o Puerto el Triunfo):");
let valorViaje = parseFloat(prompt("Ingrese el precio del viaje:"));
let descuentoViaje = calcularDescuentoViaje(origen, destino);

console.log(`Origen: ${origen}`);
console.log(`Destino: ${destino}`);
console.log(`Precio original: ${valorViaje}`);
console.log(`Descuento: ${descuentoViaje * 100}%`);
console.log(`Precio con descuento: ${precio * (1 - descuentoViaje)}`);

//Ejercicio 7: Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: La cantidad de valores negativos ingresados, la cantidad de valores positivos ingresados, la cantidad de múltiplos de 15 y el valor acumulado de los números ingresados que son pares.

let valores = [];
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
let valor = parseInt(prompt(`Ingrese el valor ${i + 1}:`));
valores.push(valor);
if (valor < 0) {
    negativos++;
} else if (valor > 0) {
    positivos++;
}
if (valor % 15 === 0) {
    multiplosDe15++;
}
if (valor % 2 === 0) {
    sumaPares += valor;
}
}

console.log(`Cantidad de valores negativos: ${negativos}`);
console.log(`Cantidad de valores positivos: ${positivos}`);
console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
console.log(`Suma de números pares: ${sumaPares}`);

//Ejercicio 8: Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.

let numero = parseInt(prompt("Ingrese un número:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

/*Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
•
Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
•
Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
•
Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
•
Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/

let temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en Celsius:"));
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit <= 32) {
console.log("Temperatura baja");
} else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit <= 68) {
console.log("Temperatura adecuada");
} else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit <= 96) {
console.log("Temperatura alta");
} else {
console.log("Temperatura desconocida");
}

let categoriaTemperatura = "";
if (temperaturaFahrenheit < 32) {
categoriaTemperatura = "baja";
} else if (temperaturaFahrenheit < 68) {
categoriaTemperatura = "adecuada";
} else if (temperaturaFahrenheit < 96) {
categoriaTemperatura = "alta";
} else {
categoriaTemperatura = "desconocida";
}

console.log(`La temperatura es ${temperaturaFahrenheit}°F y es de categoría ${categoriaTemperatura}`);

//Ejercicio 10: Se cuenta con la siguiente información: Las edades de 5 estudiantes del turno mañana, las edades de 6 estudiantes del turno tarde y las edades de 11 estudiantes del turno noche. Lo que queremos devolver: Obtener el promedio de las edades de cada turno (tres promedios), imprimir dichos promedios (promedio de cada turno) y mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor.

let edadesManana = [];
let edadesTarde = [];
let edadesNoche = [];

for (let i = 0; i < 5; i++) {
edadesManana.push(parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno mañana:`)));
}

for (let i = 0; i < 6; i++) {
edadesTarde.push(parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno tarde:`)));
}

for (let i = 0; i < 11; i++) {
edadesNoche.push(parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno noche:`)));
}

let promedioManana = edadesManana.reduce((a, b) => a + b, 0) / edadesManana.length;
let promedioTarde = edadesTarde.reduce((a, b) => a + b, 0) / edadesTarde.length;
let promedioNoche = edadesNoche.reduce((a, b) => a + b, 0) / edadesNoche.length;

console.log(`Promedio de edades del turno mañana: ${promedioManana}`);
console.log(`Promedio de edades del turno tarde: ${promedioTarde}`);
console.log(`Promedio de edades del turno noche: ${promedioNoche}`);

let maxPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
let turnoMaxPromedio = "";
if (maxPromedio === promedioManana) {
turnoMaxPromedio = "mañana";
} else if (maxPromedio === promedioTarde) {
turnoMaxPromedio = "tarde";
} else {
turnoMaxPromedio = "noche";
}

console.log(`El turno con el promedio de edades mayor es el turno ${turnoMaxPromedio}`);