let carrito = [];

while (true) {
  let producto = prompt("Ingrese el nombre del producto solo nos queda en stock samsung a53 y a13,(ingrese 'finalizar' para terminar la compra):");

  if (producto === "a53" || producto === "a13") {
    let precio = prompt(`Ingrese el precio de ${producto}:`);
    let cantidad = prompt(`Ingrese la cantidad de ${producto} que desea comprar:`);
    
    let item = {
      nombre: producto,
      precio: parseFloat(precio),
      cantidad: parseInt(cantidad)
    };

    carrito.push(item);
    alert(`${producto} ha sido agregado al carrito.`);
  } else if (producto === "finalizar") {
    console.log("Productos en el carrito:");
    console.log(carrito);

    let confirmar = confirm("¿Desea confirmar su compra?");
    if (confirmar) {
      let total = 0;
      for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio * carrito[i].cantidad;
      }

      alert(`¡Gracias por su compra! El total de su compra es de $${total}.`);
      break;
    } else {
      carrito = [];
      alert("Compra cancelada.");
    }
  } else if (producto === null || producto === "") {
    break;
  } else {
    alert(`Lo siento, no tenemos ${producto} en stock.`);
  }
}