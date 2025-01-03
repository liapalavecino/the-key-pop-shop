// PARA CARRITO.HTML:
// Obtiene los elementos del DOM
const carritoLista = document.getElementById("lista-carrito");

// Carga el carrito desde LocalStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito() {
  carritoLista.innerHTML = ""; // Limpiar la lista
  if (carrito.length === 0) {
    carritoLista.innerHTML = "<p>No hay productos en el carrito. (Todavía)</p>";
    return;
  }

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => eliminarProducto(index));
    li.appendChild(botonEliminar);
    carritoLista.appendChild(li);
  });
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

document.getElementById("vaciar-carrito").addEventListener("click", () => {
  localStorage.removeItem("carrito");
  carrito.length = 0;
  mostrarCarrito();
});




mostrarCarrito();

// PARA PRODUCTO.HTML

document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
  
    botonesAgregar.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        const producto = {
          nombre: e.target.dataset.nombre,
          precio: e.target.dataset.precio,
        };
  
        // Guardar en LocalStorage
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
  
        alert(`${producto.nombre} ha sido añadido al carrito.`);
      });
    });
  });
  