let carrito = [];

function agregarAlCarrito(index) {
  const producto = productos[index];
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  carrito.forEach((prod, i) => {
    const item = document.createElement("p");
    item.textContent = `${prod.nombre} - $${prod.precio}`;
    lista.appendChild(item);
  });

  document.getElementById("carrito").classList.remove("carrito-oculto");
  document.getElementById("carrito-count").textContent = carrito.length;
}

document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
  document.getElementById("carrito").classList.add("carrito-oculto");
});

document.getElementById("form-pedido").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;

  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  const pedido = carrito.map(p => `${p.nombre} - $${p.precio}`).join("\n");
  const total = carrito.reduce((sum, p) => sum + p.precio, 0);

  const mensaje = `
Pedido de: ${nombre}
Teléfono: ${telefono}
Dirección: ${direccion}

Productos:
${pedido}

Total: $${total}
  `;

  // Envía el pedido por correo (mailto)
  const correo = "jonhas22s@gmail.com";
  window.location.href = `mailto:${correo}?subject=Nuevo Pedido&body=${encodeURIComponent(mensaje)}`;

  carrito = [];
  actualizarCarrito();
  document.getElementById("form-pedido").reset();
  document.getElementById("carrito").classList.add("carrito-oculto");
});
