let carrito = [];

function addToCart(producto) {
  carrito.push(producto);
  renderCarrito();
}

function renderCarrito() {
  const lista = document.getElementById("cart-list");
  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

function vaciarCarrito() {
  carrito = [];
  renderCarrito();
}
