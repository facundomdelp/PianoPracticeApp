// FUNCIONES
// Función para inyectar todos los botones
function renderizarBotones() {
    for(const componente of componentes) {
        for(const elemento of componente.componente) {
            componente.nodo.innerHTML += `
                <button id="btn${elemento}" class="disabled">${elemento}</button>
            `
        }
    }
    habilitarBoton(dificultades);
    document.getElementById(`btnPrincipiante`).className = "enabled";
    habilitarBoton(tonicasPrincipiantes);
    habilitarBoton(tonicasPrincipiantes);
    habilitarBoton(tecnicas);
}

// Botones habilitados para activar
function habilitarBoton (btns) {
    for(const x of btns) {
        document.getElementById(`btn${x}`).removeAttribute("class");
    }
}

// Botones dehabilitados
function deshabilitarBoton(btns) {
    for(const x of btns) {
        document.getElementById(`btn${x}`).className = "disabled";
    }
}

// Función para abrir o cerrar el panel de instrucciones
function mostrarUOcultarInstrucciones() {

    if(document.getElementById("instrucciones").className !== "mostrarInstrucciones") {
        document.getElementById("instrucciones").className = "mostrarInstrucciones";
    } else if(document.getElementById("instrucciones").className == "mostrarInstrucciones") {
        document.getElementById("instrucciones").className = "";
    }
}

// Botones activados
function activarBoton(btns) {
    for(const x of btns) {
        document.getElementById(`btn${x}`).className = "enabled";
    }
}


// Deshabilita todos los botones (excepto dificultades)
function deshabilitarTodosLosBotones() {
    deshabilitarBoton(tonicasAvanzadas);
    deshabilitarBoton(tecnicas);
    deshabilitarBoton(niveles);
    deshabilitarBoton(familias);
    deshabilitarBoton(modosAvanzados);
}

// Habilitar botones según la dificultad elegida
function funcionDificultadSeleccionada(dificultad) {
    deshabilitarTodosLosBotones();
    if(dificultad == "Principiante") {
        habilitarBoton(dificultades);
        document.getElementById("btnPrincipiante").className = "enabled";
        habilitarBoton(tonicasPrincipiantes);
        habilitarBoton(tecnicas);
    } else if(dificultad == "Intermedio") {
        habilitarBoton(dificultades);
        document.getElementById("btnIntermedio").className = "enabled";
        habilitarBoton(tonicasIntermedias);
        habilitarBoton(tecnicas);
        habilitarBoton(modosIntermedios);
    } else if(dificultad == "Avanzado") {
        habilitarBoton(dificultades);
        document.getElementById("btnAvanzado").className = "enabled";
        habilitarBoton(tonicasAvanzadas);
        habilitarBoton(tecnicas);
        habilitarBoton(niveles);
        habilitarBoton(familias);
        habilitarBoton(modosAvanzados);
    }
}

// Generar una rutina aleatoria a partir de la dificultad seleccionada
function crearRutina() {
    for(const dificultad of dificultades) {
        let dificultadSeleccionada = dificultad
        dificultadSeleccionada += "." + document.getElementById(`btn${dificultad}`).className;

        if(dificultadSeleccionada == "Principiante.enabled") {
            escalas.push(new Escala(
                "Ejercicio " + parseInt(escalas.length + 1),
                dificultad,
                elementoAleatorio(tonicasPrincipiantes),
                familias[0],
                modosAvanzados[0],
                elementoAleatorio(tecnicas),
                niveles[0]
            ));

            habilitarBoton(tonicasPrincipiantes);
            document.getElementById("btn" + escalas[escalas.length - 1].tonica).className += "principianteEnabled";
            habilitarBoton(tecnicas);
            document.getElementById("btn" + escalas[escalas.length - 1].tecnica).className += "principianteEnabled";

            desactivarTeclasPiano();
            activarEscalaPiano(escalas);


        } else if(dificultadSeleccionada == "Intermedio.enabled") {
            escalas.push(new Escala(
                "Ejercicio " + parseInt(escalas.length + 1),
                dificultad,
                elementoAleatorio(tonicasIntermedias),
                familias[0],
                elementoAleatorio(modosIntermedios),
                elementoAleatorio(tecnicas),
                niveles[0]
            ));

            habilitarBoton(tonicasIntermedias);
            document.getElementById("btn" + escalas[escalas.length - 1].tonica).className += "intermedioEnabled";
            habilitarBoton(modosIntermedios);
            document.getElementById("btn" + escalas[escalas.length - 1].modo).className += "intermedioEnabled";
            habilitarBoton(tecnicas);
            document.getElementById("btn" + escalas[escalas.length - 1].tecnica).className += "intermedioEnabled";

            desactivarTeclasPiano();
            activarEscalaPiano(escalas);

        } else if(dificultadSeleccionada == "Avanzado.enabled") {
            escalas.push(new Escala(
                "Ejercicio " + parseInt(escalas.length + 1),
                dificultad,
                elementoAleatorio(tonicasAvanzadas),
                elementoAleatorio(familias),
                elementoAleatorio(modosAvanzados),
                elementoAleatorio(tecnicas),
                elementoAleatorio(niveles),
            ));

            habilitarBoton(tonicasAvanzadas);
            document.getElementById("btn" + escalas[escalas.length - 1].tonica).className += "avanzadoEnabled";
            habilitarBoton(familias);
            document.getElementById("btn" + escalas[escalas.length - 1].familia).className += "avanzadoEnabled";
            habilitarBoton(modosAvanzados);
            document.getElementById("btn" + escalas[escalas.length - 1].modo).className += "avanzadoEnabled";
            habilitarBoton(tecnicas);
            document.getElementById("btn" + escalas[escalas.length - 1].tecnica).className += "avanzadoEnabled";
            habilitarBoton(niveles);
            document.getElementById("btn" + escalas[escalas.length - 1].nivel).className += "avanzadoEnabled";

            desactivarTeclasPiano();
            activarEscalaPiano(escalas);
        }
    }

    console.log(escalas);
}

// Función que retorna un número aleatorio entre 0 y max.
function enteroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

// Función para retornar un elemento aleatorio dentro de un array.
function elementoAleatorio(elementos) {
    return elementos[enteroAleatorio(elementos.length)];
}

// Función constructora de objetos a partir de la dificultad del ejercicio.
class Escala {
    constructor(ejercicio, dificultad, tonica, familia, modo, tecnica, nivel) {
        this.ejercicio = ejercicio;
        this.dificultad = dificultad;
        this.tonica = tonica;
        this.familia = familia;
        this.modo = modo;
        this.tecnica = tecnica;
        this.nivel = nivel;
    }
}

// Función para activar las teclas del piano según la tónica
function activarTeclasPiano(tonicaSeleccionada) {

    clasesTeclaBlanca = document.getElementsByClassName("blanca");
    clasesTeclaNegra = document.getElementsByClassName("negra");

    if(tonicasBlancas.includes(tonicaSeleccionada)) {
        document.getElementById("piano" + tonicaSeleccionada).className += " blancaTeclaActiva";
    } else if (tonicasNegras.includes(tonicaSeleccionada)) {
        document.getElementById("piano" + tonicaSeleccionada).className += " negraTeclaActiva";
    }
    document.getElementById("piano" + tonicaSeleccionada).innerText = tonicaSeleccionada;
}

// Función para desactivar todas las teclas del piano
function desactivarTeclasPiano() {

    clasesTeclaBlanca = document.getElementsByClassName("blanca");
    clasesTeclaNegra = document.getElementsByClassName("negra");
    for(const teclas of clasesTeclaBlanca) {
        teclas.className = "blanca";
        teclas.innerText = "";
    };
    for(const teclas of clasesTeclaNegra) {
        teclas.className = "negra";
        teclas.innerText = "";
    };
}

// Función para activar todas las teclas del piano según la escala elegida
function activarEscalaPiano(escalas) {

    activarTeclasPiano(escalas[escalas.length - 1].tonica);
    let saltoDeTonos
    if(escalas[escalas.length - 1].familia == familias[0]) {
        saltoDeTonos = [1, 1, 1/2, 1, 1, 1]; // Saltos de semitonos para escala melódica mayor (intervalos) - ver documentación adjunta de teoría musical
        intervalosSegunModo(escalas, saltoDeTonos);
        activarSieteTeclasPiano(escalas, saltoDeTonos);
    }else if(escalas[escalas.length - 1].familia == familias[1]) {
        saltoDeTonos = [1/2, 1, 1/2, 1, 1, 1]; // Saltos de semitonos para escala melódica menor (intervalos) - ver documentación adjunta de teoría musical
        intervalosSegunModo(escalas, saltoDeTonos);
        activarSieteTeclasPiano(escalas, saltoDeTonos);
    }else if(escalas[escalas.length - 1].familia == familias[2]) {
        saltoDeTonos = [1, 1, 1/2, 1 + 1/2, 1/2, 1]; // Saltos de semitonos para escala harmónica menor (intervalos) - ver documentación adjunta de teoría musical
        intervalosSegunModo(escalas, saltoDeTonos);
        activarSieteTeclasPiano(escalas, saltoDeTonos);
    }else if(escalas[escalas.length - 1].familia == familias[3]) {
        saltoDeTonos = [1, 1, 1/2, 1, 1/2, 1 + 1/2]; // Saltos de semitonos para escala harmónica mayor (intervalos) - ver documentación adjunta de teoría musical
        intervalosSegunModo(escalas, saltoDeTonos);
        activarSieteTeclasPiano(escalas, saltoDeTonos);
    }
}

// Función para activar 7 teclas del piano según un intervalo entre una tecla y otra, representado por un array
function activarSieteTeclasPiano(escalas, saltoDeTonos) {

    let tonos = 0;
    for (let i = 0; i < 6; i++) {
        tonos = tonos + saltoDeTonos[i] * 2;
        activarTeclasPiano(dosOctavasOrdenadas[tonicasOrdenadas.indexOf(escalas[escalas.length - 1].tonica) + tonos]);
    } 
}

// Función para modificar los intervalos de acuerdo al modo (ver documentación musical adjunta)
function intervalosSegunModo(escalas, saltoDeTonos) {

    for(let i = 0; i < modosOrdenados.indexOf(escalas[escalas.length - 1].modo); i++) {
        saltoDeTonos.push(saltoDeTonos[i]);
        saltoDeTonos.shift();
    }
    return saltoDeTonos
}

// Función para reproducir el sonido
function reproducirSonido(tonica) {
        var audio = sonidos[tonicasOrdenadas.indexOf(tonica)];
        audio.play();
}
