//Ejercicio 1: Clase Cabecera Pagina

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
    }

    obtenerTitulo(): string {
    return this.titulo;
    }

    obtenerColor(): string {
    return this.color;
    }

    obtenerFuente(): string {
    return this.fuente;
    }

    setAlineacion(alineacion: string): void {
    this.alineacion = alineacion;
    }

    imprimirPropiedades(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
    }
}

const cabecera = new CabeceraPagina("Mi página", "azul", "Arial");
cabecera.setAlineacion("centrado");
cabecera.imprimirPropiedades();

//Ejercicio 2: Clase Calculadora
class Calculadora {
    sumar(a: number, b: number): number {
    return a + b;
    }

    restar(a: number, b: number): number {
    return a - b;
    }

    multiplicar(a: number, b: number): number {
    return a * b;
    }

    dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
    }

    potencia(a: number, b: number): number {
    return Math.pow(a, b);
    }

    factorial(a: number): number {
    let resultado = 1;
    for (let i = 1; i <= a; i++) {
        resultado *= i;
    }
    return resultado;
    }
}

const calculadora = new Calculadora();
console.log(calculadora.sumar(2, 3));
console.log(calculadora.restar(5, 2));
console.log(calculadora.multiplicar(4, 5));
console.log(calculadora.dividir(10, 2));
console.log(calculadora.potencia(2, 3));
console.log(calculadora.factorial(5));

//Ejercicio 3: Clase Canción

class Cancion {
    private titulo: string;
    private genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
    }

    getAutor(): string {
    return this.autor;
    }

    setAutor(autor: string): void {
    this.autor = autor;
    }

    mostrarDatos(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Género: ${this.genero}`);
    console.log(`Autor: ${this.autor}`);
    }
}

const cancion = new Cancion("Mi canción", "rock");
cancion.setAutor("Juan Pérez");
cancion.mostrarDatos();

//Ejercicio 4: Clase Cuenta

class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;  
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
    }

    depositar(): void {
    if (this.cantidad < 5) {
        console.log("El valor a depositar debe ser mayor a $5.00");
    } else {
        console.log(`Se ha depositado correctamente. La cantidad depositada es: $${this.cantidad}`);
    }
    }

    retirar(valor: number): void {
    if (valor < 5) {
        console.log("No hay efectivo");
    } else {
        this.cantidad -= valor;
        console.log(`Se ha retirado: $${valor}. La cantidad restante es: $${this.cantidad}`);
    }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
    }
    
    const cuenta = new Cuenta("Juan Pérez", 100, "Ahorro", "1234567890");
    cuenta.depositar();
    cuenta.retirar(20);
    cuenta.mostrarDatos();

//Ejercicio 5: Clase Persona y Empleado

abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
    }

    esMayorDeEdad(): void {
    if (this.edad >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("No es mayor de edad");
    }
    }

    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
    }

    cargarSueldo(): void {
    console.log(`El sueldo es: $${this.sueldo}`);
    }

    imprimirSueldo(): void {
    console.log(`El sueldo es: $${this.sueldo}`);
    }

    mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Sueldo: $${this.sueldo}`);
    }
}

const empleado = new Empleado("Juan Pérez", "Gómez", "Calle 123", "1234567890", 30, 50000);
empleado.esMayorDeEdad();
empleado.cargarSueldo();
empleado.imprimirSueldo();
empleado.mostrarDatos();