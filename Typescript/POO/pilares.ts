//4 PILARES POO

/*
HERENCIA
POLIMORFIRMOS

ENCAPSULAMIENTO -> Limitar el acceso a algo a traves de MODIFICADORES DE ACCESO
ABSTRACCION

*/

/*
    Modificadores de acceso
    Public -> Todo el mundo puede acceder
    Private -> Solo la clase puede acceder
    Protected -> Solo la clase y sus hijos pueden acceder

*/
//ENCAPSULAMIENTO & ABSTRACCION

class Person{
    private name:string;
    age:number;
    dui:string;

    constructor(nameParam:string,ageParam:number;duiParam:string){
        this.name=nameParam;
        this.age=ageParam;
        this.dui=duiParam;
    }
    //Metodo
    respirar(){
        console.log("Respirando");
    }
}

let personita = new Person("Pedro Jose Garcia",80,"0554812-8");
personita.name = "Hector";
console.log(personita);