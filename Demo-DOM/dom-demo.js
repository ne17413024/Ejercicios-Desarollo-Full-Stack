// ===============================
// ¿Qué es el DOM?
// Realizado por Ricardo Monroy para el curso de JavaScript básico
// ===============================
//
// El DOM (Document Object Model) es una representación en forma de árbol
// del documento HTML que carga el navegador.
// Cada etiqueta (<p>, <div>, <button>, etc.) se vuelve un "nodo"/"elemento"
// que se puede leer y modificar con JavaScript.
//
// El objeto global "document" te da acceso a ese árbol.
// Por ejemplo: document.body, document.getElementById(...), etc.

// ===============================
// 1. Seleccionar elementos y cambiar texto
// ===============================

// getElementById: selecciona un elemento por su atributo id. [web:76][web:79]
const parrafoTexto = document.getElementById("parrafoTexto");
const btnCambiarTexto = document.getElementById("btnCambiarTexto");

// addEventListener: permite escuchar eventos (ej. 'click') sobre un elemento. [web:77][web:80]
btnCambiarTexto.addEventListener("click", function () {
  // textContent cambia SOLO el texto, sin interpretar HTML. [web:79]
  parrafoTexto.textContent =
    "El texto del párrafo fue modificado usando JavaScript (textContent).";

  // innerHTML cambia el contenido interpretando HTML (más poderoso, pero úsalo con cuidado). [web:79]
  // parrafoTexto.innerHTML =
  //   'El texto del párrafo fue <strong>modificado</strong> usando <em>innerHTML</em>.';
});

// ===============================
// 2. Cambiar estilos y clases
// ===============================

const parrafoEstilos = document.getElementById("parrafoEstilos");
const btnToggleClase = document.getElementById("btnToggleClase");

// classList permite agregar, quitar o alternar clases CSS en un elemento. [web:79][web:80]
btnToggleClase.addEventListener("click", function () {
  // Alterna una clase CSS llamada "destacado" definida en el CSS.
  parrafoEstilos.classList.toggle("destacado");

  // También puedes modificar estilos en línea:
  // parrafoEstilos.style.backgroundColor = "#ffeb99";
});

// ===============================
// 3. Crear y agregar elementos dinámicamente
// ===============================

const listaDemo = document.getElementById("listaDemo");
const btnAgregarItem = document.getElementById("btnAgregarItem");

// Vamos a llevar la cuenta de cuántos ítems se han agregado
let contadorItems = 2;

btnAgregarItem.addEventListener("click", function () {
  contadorItems++;

  // document.createElement: crea un nuevo nodo del tipo indicado. [web:29][web:80]
  const nuevoLi = document.createElement("li");

  // Asignar texto al nuevo elemento
  nuevoLi.textContent = "Elemento agregado " + contadorItems;

  // appendChild: agrega el nuevo nodo como hijo del elemento padre. [web:29]
  listaDemo.appendChild(nuevoLi);
});

// ===============================
// 4. Mostrar / ocultar contenido
// ===============================

const parrafoOculto = document.getElementById("parrafoOculto");
const btnMostrarOcultar = document.getElementById("btnMostrarOcultar");

// Usamos una clase .oculto en el CSS que hace display: none.
btnMostrarOcultar.addEventListener("click", function () {
  // toggle agrega la clase si no está, o la quita si ya está.
  parrafoOculto.classList.toggle("oculto");

  // Actualizamos el texto del botón según el estado actual.
  if (parrafoOculto.classList.contains("oculto")) {
    btnMostrarOcultar.textContent = "Mostrar texto";
  } else {
    btnMostrarOcultar.textContent = "Ocultar texto";
  }
});

// ===============================
// Resumen de lo esencial del DOM usado aquí
// ===============================
//
// 1. Selección de elementos:
//    - document.getElementById("id")
//    - document.querySelector("selector CSS")
//    - document.querySelectorAll("selector CSS")
//    Sirven para obtener una referencia a nodos del DOM. 
//
// 2. Leer / escribir contenido:
//    - elemento.textContent  -> solo texto
//    - elemento.innerHTML    -> texto + HTML interpretado
//
// 3. Modificar estilos y clases:
//    - elemento.style.propiedad = "valor"
//    - elemento.classList.add("clase")
//    - elemento.classList.remove("clase")
//    - elemento.classList.toggle("clase")
//
// 4. Crear / agregar elementos:
//    - document.createElement("tag")
//    - elemento.appendChild(nuevoNodo)
//    - elemento.removeChild(hijo) (o hijo.remove())
//
// 5. Eventos:
//    - elemento.addEventListener("click", handler)
//    - Dentro del handler puedes leer/modificar el DOM según la acción del usuario.
//
// Con solo estos puntos ya puedes construir interfaces dinámicas sencillas:
// formularios que muestran resultados, listas que crecen, toggles, etc.
