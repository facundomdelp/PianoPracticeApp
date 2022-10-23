// EVENTOS
// Se llama a la función para inyectar el HTML
renderizarBotones();

// Evento para abrir y cerrar el botón de instrucciones
document.getElementById("botonInstrucciones").addEventListener("click", mostrarUOcultarInstrucciones);

// Evento para activar posibles combinaciones a partir del boton de dificultad seleccionado
for (const dificultad of dificultades) {
    document.getElementById(`btn${dificultad}`).addEventListener("click",function(){funcionDificultadSeleccionada(dificultad)});
};

// Evento para generar la rutina
const escalas = [];
document.getElementById("aleatorio").addEventListener("click", crearRutina);

// Evento para reproducir el sonido de la nota musical según la tecla del piano que se presiona
for (const tonica of tonicasOrdenadas) {
    document.getElementById(`piano${tonica}`).addEventListener("click", function() {reproducirSonido(tonica)});
}

