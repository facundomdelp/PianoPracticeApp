// EVENTOS
// Se llama a la función para inyectar el HTML
renderizarBotones();

// Evento para abrir y cerrar el botón de instrucciones
document.getElementById("instrucciones").addEventListener("click", mostrarUOcultarInstrucciones);

// Evento para activar posibles combinaciones a partir del boton de dificultad seleccionado
for(const dificultad of dificultades) {
    document.getElementById(`btn${dificultad}`).addEventListener("click",function(){funcionDificultadSeleccionada(dificultad)});
};

// Se descarga el Local Storage
const almacenados = JSON.parse(localStorage.getItem("escalasPracticadas"));
const escalas = [];

if(almacenados !== null) {
    for(const objeto of almacenados) {
        escalas.push(new Escala(objeto.ejercicio, objeto.dificultad, objeto.tonica, objeto.familia, objeto.modo, objeto.tecnica, objeto.nivel))
    }
}
console.log(escalas);

// Evento para generar la rutina, cuando se aprieta el botón de crear rutina aleatoria
document.getElementById(`btn${aleatorio}`).addEventListener("click", crearRutina);

// Eventos para activar teclas del piano por todos los botones excepto el de rutina aleatoria
const escalasAuxiliaresParaActivarTeclasPiano = [];

for(const tonica of tonicasOrdenadas) {
    document.getElementById(`btn${tonica}`).addEventListener("click", function(){activarBotonTonicaIndependiente(tonica)})
}

for(const familia of familias) {
    document.getElementById(`btn${familia}`).addEventListener("click", function(){activarBotonFamiliaIndependiente(familia)})
}

for(const modo of modosOrdenados) {
    document.getElementById(`btn${modo}`).addEventListener("click", function(){activarBotonModoIndependiente(modo)})
}

// Eventos para activar las figuras según técnica o nivel
for(const tecnica of tecnicas) {
    document.getElementById(`btn${tecnica}`).addEventListener("click", function(){activarBotonTecnicaIndependiente(tecnica)})
}

for(const nivel of niveles) {
    document.getElementById(`btn${nivel}`).addEventListener("click", function(){activarBotonNivelIndependiente(nivel)})
}

// Evento para reproducir el sonido de la nota musical según la tecla del piano que se presiona
for (const tonica of tonicasOrdenadas) {
    document.getElementById(`piano${tonica}`).addEventListener("click", function() {reproducirSonido(tonica)});
}

// Evento para ver las escalas ya practicadas
document.getElementById("historial").addEventListener("click", verEscalas);

// Evento para obtener información de una API y renderizarla (se utiliza un archivo JSON que simula a una API)
document.getElementById("lecciones").addEventListener("click", botonLecciones);