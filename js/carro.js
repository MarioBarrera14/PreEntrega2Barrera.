let productos = [
  { nombre: "a13", precio: 73.999 },
  { nombre: "a53", precio: 163.999 }
];

let carrito = [];
let total = 0;

while (true) {
  let producto = prompt("Ingrese el nombre del producto que desea agregar al carrito (o 'finalizar' para terminar la compra):");

  if (producto === "finalizar") {
    console.log("Productos en el carrito:");
    carrito.forEach(item => {
      console.log(`${item.nombre} - Precio: $${item.precio} - Cantidad: ${item.cantidad}`);
    });

    if (carrito.length === 0) {
      alert("No hay productos en el carrito.");
    } else {
      alert(`El total de su compra es de $${total}. ¡Gracias por su compra!`);
    }
    break;
  }

  let seleccion = productos.find(item => item.nombre.toLowerCase() === producto.toLowerCase());

  if (!seleccion) {
    alert("Producto no válido.");
    continue;
  }

  let cantidad = prompt(`Ingrese la cantidad de ${producto} que desea comprar:`);

  let item = {
    nombre: seleccion.nombre,
    precio: seleccion.precio,
    cantidad: parseInt(cantidad)
  };

  carrito.push(item);
  total += item.precio * item.cantidad;

  alert(`${producto} ha sido agregado al carrito.`);
}
