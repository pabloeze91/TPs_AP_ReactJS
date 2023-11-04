const estado = document.getElementById("estado");
const estadoSeleccionado = document.getElementById("estadoSeleccionado");

estado.addEventListener("change", function () {
  estadoSeleccionado.textContent = this.value;
});
