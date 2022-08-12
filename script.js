class Colecciones {
    constructor(id, nombre, precio, producto) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.producto = producto
    }
};

const coleccion = [];

function listaProductos() {
  coleccion.push(new Colecciones(1,  "REMERA ROJA", 6000, "remera"))
  coleccion.push(new Colecciones(2,  "REMERA NEGRA", 6500, "remera"))
  coleccion.push(new Colecciones(3,  "CAMISA FLOREADA", 9000, "camisa"))
  coleccion.push(new Colecciones(4,  "BUZO CON CAPUCHA", 7000, "buzo"))
  coleccion.push(new Colecciones(5,  "PANTALON CHINO", 6000, "pantalon"))
  coleccion.push(new Colecciones(6,  "PANTALON CAMUFLADO", 6000, "pantalon"))
}

let saludo = alert("Bienvenido a Rivia Clothing");
listaProductos();
const carrito = [];

function agregarProducto() {
  let productos = parseInt(prompt("Seleccione que producto necesita por su numero"));
  const resultado = coleccion.find((elemento) => elemento.id === productos);
  carrito.push(resultado)
  console.table(resultado);
}


function agregaMas() {
  let sumar = confirm("Si quiere agregar ACEPTAR. \nÓ seleccione CANCELAR para ver su total");
  if (sumar) {
    agregarProducto()
    let total = carrito.reduce((acc, el) => acc + el.precio, 0)
    console.log("El total de los productos es: $", total)
  }else {
    let total = carrito.reduce((acc, el) => acc + el.precio, 0)
    console.log("El total de los productos es: $", total)
  }
}

agregarProducto();
agregaMas();