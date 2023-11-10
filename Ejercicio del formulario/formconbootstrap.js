const estado = document.getElementById("estado");
const estadoSeleccionado = document.getElementById("estadoSeleccionado");

/* estado.addEventListener("change", () => {
  estadoSeleccionado.textContent = this.value; //textContent reemplaza el contenido de estadoSeleccionado
}); */

//Otra forma

estado.addEventListener("change", (e) => {
  //estadoSeleccionado.textContent = e.target.value;
  estadoSeleccionado.innerHTML = e.target.value;
});
