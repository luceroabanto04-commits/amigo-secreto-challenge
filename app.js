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
    // Validar que el nombre no exista ya en el array
    if (amigos.includes(nombre)) {
    alert("Este nombre ya fue agregado.");
    return;
    }
  // Agregar al array
  amigos.push(nombre);
  // Limpiar el input
  input.value = "";
  // Actualizar la lista en el HTML
  actualizarLista();
 }  

// Función para actualizar la lista en el HTML
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar lista y evitar duplicados
  lista.innerHTML = "";

  // Recorrer el array e insertar <li> para cada amigo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // Validar que haya amigos
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear.");
    return;
  }
  // Generar índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Mostrar resultado en el HTML
  resultado.innerHTML = `🎉 El amigo secreto es:<strong>${amigos[indiceAleatorio]}</strong>🎉`;

  // Bloquear más ingresos después del sorteo
  document.getElementById("amigo").disabled = true;
  document.querySelector(".button-add").disabled = true;
  document.querySelector(".button-draw").disabled = true;
}