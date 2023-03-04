# PreEntrega2Barrera.
creamos un ecommerce, carrito de compras en una página web, utilizando un array llamado productos para almacenar información sobre los productos disponibles y un array llamado carrito para almacenar los productos que el usuario ha agregado al carrito.

La función renderizarProductos() se encarga de mostrar la lista de productos disponibles en la página web, creando elementos HTML y agregándolos al DOM utilizando el método appendChild().

La función agregarAlCarrito() se llama cuando el usuario hace clic en el botón "Agregar al carrito" para agregar un producto al carrito. Si el producto ya está en el carrito, se incrementa la cantidad. Si no está en el carrito, se agrega un nuevo objeto al array carrito.

La función actualizarCarrito() actualiza la lista de productos en el carrito, creando elementos HTML y agregándolos al DOM utilizando el método appendChild(). También actualiza el precio total del carrito y guarda el estado actual del carrito en el almacenamiento local utilizando el método setItem() del objeto localStorage.

La función calcularTotalCarrito() calcula el precio total del carrito multiplicando el precio de cada producto por su cantidad y sumando los resultados.

El código también incluye un botón "Vaciar carrito" que vacía el array carrito y llama a actualizarCarrito() para actualizar la página web.

Finalmente, el código utiliza el objeto localStorage para guardar el estado actual del carrito de compras y para cargar el carrito almacenado al cargar la página. Si hay un carrito almacenado, se carga en el array carrito y se llama a actualizarCarrito() para actualizar la página web con la información almacenada.