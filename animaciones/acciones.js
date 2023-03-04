// Obtener todos los botones
const botones = document.querySelectorAll(".mi-boton");

// Tiempos de espera para cada botón en milisegundos
const tiempos = [2000, 2500, 3000];

// Iterar sobre cada botón y esperar el tiempo correspondiente antes de mostrarlo
for (let i = 0; i < botones.length; i++) {
	const boton = botones[i];
	const tiempo = tiempos[i];

	setTimeout(() => {
		boton.classList.add("mostrar-boton");
		boton.classList.remove("oculto");
	}, tiempo);
}
