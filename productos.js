const productos = [
  { nombre: "Pan francés", precio: 400 },
  { nombre: "Bischochos", precio: 500 },
  { nombre: "Medialunas", precio: 250 },
  { nombre: "Vigilantes", precio: 300 },
  { nombre: "Facturas mixtas", precio: 300 },
  { nombre: "Facturas con dulce de leche", precio: 350 },
  { nombre: "Roles de canela", precio: 400 },
  { nombre: "Chip de chocolate", precio: 350 },
  { nombre: "Facturas con pasas de uva", precio: 300 },
  { nombre: "Caras sucias", precio: 300 },
  { nombre: "Cremonas", precio: 500 },
  { nombre: "Pan de pancho", precio: 250 },
  { nombre: "Pan de hamburguesa", precio: 250 },
  { nombre: "Pan de pebete", precio: 250 },
  { nombre: "Pan saborizado (jamón, queso, salame)", precio: 600 },
  { nombre: "Pepas", precio: 200 },
  { nombre: "Pan de molde", precio: 400 },
];

const contenedor = document.getElementById("productos");

productos.forEach((prod, index) => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <h3>${prod.nombre}</h3>
    <p>Precio: $${prod.precio}</p>
    <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
  `;
  contenedor.appendChild(div);
});

