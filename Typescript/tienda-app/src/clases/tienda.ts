import { Producto } from "./Producto";

export class Tienda{
    private productos: Producto[] = []; //Arrey para guardar archivos
    
    constructor(){
        this.productos = JSON.parse(localStorage.getItem('productos') || '[]' ) //Donde se guarda toda la informacion
    }

    agregarProducto(producto:Producto){
        this.productos.push(producto);
        this.refreshLocal();        
    }

    /* 
        Guardamos los elementos o productos de this.productos dentro del localStorage Key "productos"
    */
    refreshLocal(){
        //Este guardado lo que hace es actualizar la lista de productos en el localStorea
        localStorage.setItem('productos',JSON.stringify(this.productos)); 
        }
    }



