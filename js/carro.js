const productos = [
  { nombre: "a13", 
    precio: 73.999, 
    imagen: "img/WhatsApp Image 2023-02-18 at 14.29.32.jpeg" 
  },
  { nombre: "a53", 
    precio: 163.999, 
    imagen: "img/WhatsApp Image 2023-02-18 at 14.30.13.jpeg" 
  }
];

let carrito = [];

const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const vaciarCarrito = document.getElementById("vaciar-carrito");

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - Precio: $${item.precio} - Cantidad: ${item.cantidad}`;
    const img = document.createElement("img");
    img.src = item.imagen;
    li.appendChild(img);
    listaCarrito.appendChild(li);
  });

  totalCarrito.textContent = `Total: $${calcularTotalCarrito()}`;

  // Guardar el carrito en LocalStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function calcularTotalCarrito() {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

function agregarAlCarrito(nombre, precio, imagen) {
  const itemEnCarrito = carrito.find(item => item.nombre === nombre);

  if (itemEnCarrito) {
    itemEnCarrito.cantidad++;
  } else {
    carrito.push({
      nombre,
      precio,
      imagen,
      cantidad: 1
    });
  }

  actualizarCarrito();
}

function renderizarProductos() {
  const listaProductos = document.getElementById("lista-productos");
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
    const img = document.createElement("img");
    img.src = producto.imagen;
    li.appendChild(img);
    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar al carrito";
    botonAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto.nombre, producto.precio, producto.imagen);
    });
    li.appendChild(botonAgregar);
    listaProductos.appendChild(li);
  });
}

renderizarProductos();

vaciarCarrito.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

// Cargar el carrito guardado en LocalStorage al cargar la página
const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
  actualizarCarrito();
}
