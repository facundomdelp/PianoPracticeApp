// EVENTOS
// Se llama a la función para inyectar el HTML
renderizarBotones();

// Evento a partir del boton de dificultad seleccionado
for (const dificultad of dificultades) {
    document.getElementById(`btn${dificultad}`).addEventListener("click",function(){funcionDificultadSeleccionada(dificultad)});
};


// Evento para generar la rutina
const escalas = [];
document.getElementById("aleatorio").addEventListener("click", crearRutina);