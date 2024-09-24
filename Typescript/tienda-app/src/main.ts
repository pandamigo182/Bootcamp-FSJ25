import './style.css'
import { Producto } from './clases/Producto'; //Desde donde se importa la clase Producto
import { Tienda } from './clases/tienda';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Gestion de Tiendita</h1>
    
    <form id="formProducto">
      <section>
        <label>Nombre de Producto</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre del producto">
      </section>

      <section>
        <label>Precio</label>
        <input type="text" id="precio" name="name" placeholder="Ingresa su precio">
      </section>

      <section>
        <label>Cantidad</label>
        <input type="text" id="cantidad" name="name" placeholder="Ingresa la cantidad">
      </section>

      <button type="submit">Agregar Producto</button>
    </form>
  <ul id="productsList"></ul>
  </div>  
`
const tienda = new Tienda();

//document.querySelector<HTMLElement>('#parrafo')!.innerText = "Esto es texto desde el p";

const form = document.getElementById("formProducto") as HTMLFormElement;

const productList = document.getElementById("productsList") as HTMLUListElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault(); //Previene que refresque la página
  console.log("Holiwis");

    const id = Date.now()
    //constante ya que el valor va a ser igual 
    //Seleccionamos los elementos a controlar y retiramos su valor
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
    const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);

    console.log(id);
    console.log(nombre);
    console.log(precio);
    console.log(cantidad);

    let productito = new Producto(id,nombre,precio,cantidad);
    console.log(productito);
    tienda.agregarProducto(productito);
    renderProductos(); //se pinta el li


    //localStorage.setItem('productos',JSON.stringify(productito));
    
})

function renderProductos(){
  productList.innerHTML = ""; //Se vacia la lista 
  console.log("Holiwis desde saludar")

  console.log(tienda.listarProductos());  
  tienda.listarProductos().map((Producto) => {
    const productoItem = document.createElement('li');
    console.log(Producto);
    productoItem.textContent = `${Producto.getNombre()} -Stock: ${Producto.getCantidad()} - $ ${Producto.getPrecio()} `;
    productList.appendChild(productoItem);
  });
  
}
renderProductos();