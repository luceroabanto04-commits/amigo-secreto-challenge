// Array para almacenar los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
 }  
  // Función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Limpiar el input
  input.value = "";

  // Actualizar la lista
  actualizarLista();
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar lista antes de volver a pintarla
  lista.innerHTML = "";

  // Recorrer el array e insertar <li>
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
