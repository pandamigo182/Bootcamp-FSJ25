import { Producto } from "./Producto";

export class Tienda{
    private productos: Producto[] = []; //Arrey para guardar archivos
    
    constructor(){
        const productosLocalStorage = JSON.parse(localStorage.getItem('productos') || '[]' ) //Donde se guarda toda la informacion

        //Reconvertir los datos que tenemos en el localStorage a instancias de Producto
        this.productos = productosLocalStorage.map((producto: Producto) => 
            new Producto(producto.id, producto.nombre, producto.cantidad, producto.precio)); //si se le coloca llaves desactiva el Return implicito que tiene        
    
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

        listarProductos(){
            return this.productos
        }
    }



