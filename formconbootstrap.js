var seleccionarEstado = document.getElementById('estado');
var estadoSeleccionado = document.getElementById('estadoSeleccionado');

seleccionarEstado.addEventListener('change', (e) => {
  estadoSeleccionado.innerText = e.target.value;
})