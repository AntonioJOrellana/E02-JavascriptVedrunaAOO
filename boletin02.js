// 1. Cambiar el color de un párrafo al hacer clic
const btnColor = document.getElementById("btnColor");
const parrafoColor = document.getElementById("parrafoColor");

btnColor.addEventListener("click", () => {
  const colores = ["red", "blue", "green", "purple", "orange"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  parrafoColor.style.color = colorAleatorio;
});

// 2. Crear un párrafo nuevo dentro de un div
const btnNuevoParrafo = document.getElementById("btnNuevoParrafo");
const contenedorParrafos = document.getElementById("contenedorParrafos");

btnNuevoParrafo.addEventListener("click", () => {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Este es un nuevo párrafo añadido dinámicamente.";
  contenedorParrafos.appendChild(nuevoParrafo);
});

// 3. Eliminar el último elemento de una lista
const btnEliminar = document.getElementById("btnEliminar");
const lista = document.getElementById("lista");

btnEliminar.addEventListener("click", () => {
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
  } else {
    alert("No quedan elementos en la lista.");
  }
});

// 4. Cambiar el texto de un título (h1) al pasar el ratón
const tituloHover = document.getElementById("tituloHover");
const textoOriginal = tituloHover.textContent;

tituloHover.addEventListener("mouseenter", () => {
  tituloHover.textContent = "¡Enhorabuena, has encontrado el título!";
});

tituloHover.addEventListener("mouseleave", () => {
  tituloHover.textContent = textoOriginal;
});

// 5. Ocultar y mostrar un div con un botón
const btnToggle = document.getElementById("btnToggle");
const divVisible = document.getElementById("divVisible");

btnToggle.addEventListener("click", () => {
  if (divVisible.style.display === "none") {
    divVisible.style.display = "block";
  } else {
    divVisible.style.display = "none";
  }
});
