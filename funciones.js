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
    deshabilitarBoton(aleatorio);
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
function activarBoton(btn) {
    document.getElementById(`btn${btn}`).className += "enabled";
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
    habilitarBoton(aleatorio)
    habilitarBoton(dificultades);
    habilitarBoton(tecnicas);
    if(dificultad == "Principiante") {
        document.getElementById("btnPrincipiante").className = "enabled";
        habilitarBoton(tonicasPrincipiantes);
    } else if(dificultad == "Intermedio") {
        document.getElementById("btnIntermedio").className = "enabled";
        habilitarBoton(tonicasIntermedias);
        habilitarBoton(modosIntermedios);
    } else if(dificultad == "Avanzado") {
        document.getElementById("btnAvanzado").className = "enabled";
        habilitarBoton(tonicasAvanzadas);
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
            activarBoton(escalas[escalas.length - 1].tonica);
            habilitarBoton(tecnicas);
            activarBoton(escalas[escalas.length - 1].tecnica);

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
            activarBoton(escalas[escalas.length - 1].tonica);
            habilitarBoton(modosIntermedios);
            activarBoton(escalas[escalas.length - 1].modo);
            habilitarBoton(tecnicas);
            activarBoton(escalas[escalas.length - 1].tecnica);

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
            activarBoton(escalas[escalas.length - 1].tonica);
            habilitarBoton(familias);
            activarBoton(escalas[escalas.length - 1].familia);
            habilitarBoton(modosAvanzados);
            activarBoton(escalas[escalas.length - 1].modo);
            habilitarBoton(tecnicas);
            activarBoton(escalas[escalas.length - 1].tecnica);
            habilitarBoton(niveles);
            activarBoton(escalas[escalas.length - 1].nivel);

            desactivarTeclasPiano();
            activarEscalaPiano(escalas);
        }
    }

    // Guardo en el Local Storage las nuevas escalas practicadas
    localStorage.setItem("escalasPracticadas", JSON.stringify(escalas));
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
        saltoDeTonos = [1, 1, 1/2, 1, 1, 1, 1/2]; // Saltos de semitonos para escala melódica mayor (intervalos) - ver documentación adjunta de teoría musical
        intervalosSegunModo(escalas, saltoDeTonos);
        activarSieteTeclasPiano(escalas, saltoDeTonos);
    }else if(escalas[escalas.length - 1].familia == familias[1]) {
        saltoDeTonos = [1/2, 1, 1/2, 1, 1, 1, 1]; // Saltos de semitonos para escala melódica menor (intervalos) - ver documentación adjunta de teoría musical
        intervalosSegunModo(escalas, saltoDeTonos);
        activarSieteTeclasPiano(escalas, saltoDeTonos);
    }else if(escalas[escalas.length - 1].familia == familias[2]) {
        saltoDeTonos = [1, 1, 1/2, 1 + 1/2, 1/2, 1, 1/2]; // Saltos de semitonos para escala harmónica menor (intervalos) - ver documentación adjunta de teoría musical
        intervalosSegunModo(escalas, saltoDeTonos);
        activarSieteTeclasPiano(escalas, saltoDeTonos);
    }else if(escalas[escalas.length - 1].familia == familias[3]) {
        saltoDeTonos = [1, 1, 1/2, 1, 1/2, 1 + 1/2, 1/2]; // Saltos de semitonos para escala harmónica mayor (intervalos) - ver documentación adjunta de teoría musical
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

// Función para cuando se activa un botón de tónica de manera independiente, es decir, sin utilizar el botón de rutina
function activarBotonTonicaIndependiente(tonica) {

    if(document.getElementById(`btn${tonica}`).className !== "disabled") {
        desactivarTeclasPiano();

        if(document.getElementById("btnPrincipiante").className == "enabled") {
            habilitarBoton(tonicasPrincipiantes);
            familia = familias[0];
            modo = modosOrdenados[0];      
        }else if(document.getElementById("btnIntermedio").className == "enabled") {
            habilitarBoton(tonicasIntermedias);
            familia = familias[0];
            if(document.getElementById("modo").getElementsByClassName("enabled")[0] == undefined) {
                modo = modosOrdenados[0];
                activarBoton(modosOrdenados[0]);
            } else {
                modo = document.getElementById("modo").getElementsByClassName("enabled")[0].innerText;
            }
        }else if(document.getElementById("btnAvanzado").className == "enabled") {
            habilitarBoton(tonicasAvanzadas);
            if(document.getElementById("familia").getElementsByClassName("enabled")[0] == undefined) {
                familia = familias[0];
                activarBoton(familias[0])
            } else {
                familia = document.getElementById("familia").getElementsByClassName("enabled")[0].innerText;
            }
            if(document.getElementById("modo").getElementsByClassName("enabled")[0] == undefined) {
                modo = modosOrdenados[0];
                activarBoton(modosOrdenados[0])
            } else {
                modo = document.getElementById("modo").getElementsByClassName("enabled")[0].innerText;
            }      
        }

        escalasAuxiliaresParaActivarTeclasPiano.push(new Escala(
            undefined,
            undefined,
            tonica,
            familia,
            modo,
            undefined,
            undefined,
        ));    

        activarBoton(tonica);

        activarEscalaPiano(escalasAuxiliaresParaActivarTeclasPiano);
    }
}

// Función para cuando se activa un botón de familia de manera independiente, es decir, sin utilizar el botón de rutina
function activarBotonFamiliaIndependiente(familia) {

    if(document.getElementById(`btn${familia}`).className !== "disabled") {
        desactivarTeclasPiano();

        if(document.getElementById("btnAvanzado").className == "enabled") {
            habilitarBoton(familias);
            if(document.getElementById("tonica").getElementsByClassName("enabled")[0] == undefined) {
                tonica = tonicasOrdenadas[0];
                activarBoton(tonicasOrdenadas[0])
            } else {
                tonica = document.getElementById("tonica").getElementsByClassName("enabled")[0].innerText;
            }
            if(document.getElementById("modo").getElementsByClassName("enabled")[0] == undefined) {
                modo = modosOrdenados[0];
                activarBoton(modosOrdenados[0])
            } else {
                modo = document.getElementById("modo").getElementsByClassName("enabled")[0].innerText;
            }      
        }

        escalasAuxiliaresParaActivarTeclasPiano.push(new Escala(
            undefined,
            undefined,
            tonica,
            familia,
            modo,
            undefined,
            undefined,
        ));    

        activarBoton(familia);

        activarEscalaPiano(escalasAuxiliaresParaActivarTeclasPiano);
    }
}

// Función para cuando se activa un botón de modo de manera independiente, es decir, sin utilizar el botón de rutina
function activarBotonModoIndependiente(modo) {

    if(document.getElementById(`btn${modo}`).className !== "disabled") {
        desactivarTeclasPiano();

        if(document.getElementById("btnIntermedio").className == "enabled") {
            habilitarBoton(modosIntermedios);
            if(document.getElementById("tonica").getElementsByClassName("enabled")[0] == undefined) {
                tonica = tonicasOrdenadas[0];
                activarBoton(tonicasOrdenadas[0]);
            } else {
                tonica = document.getElementById("tonica").getElementsByClassName("enabled")[0].innerText;
            }
        }else if(document.getElementById("btnAvanzado").className == "enabled") {
            habilitarBoton(modosAvanzados);
            if(document.getElementById("tonica").getElementsByClassName("enabled")[0] == undefined) {
                tonica = tonicasOrdenadas[0];
                activarBoton(tonicasOrdenadas[0])
            } else {
                tonica = document.getElementById("tonica").getElementsByClassName("enabled")[0].innerText;
            }
            if(document.getElementById("familia").getElementsByClassName("enabled")[0] == undefined) {
                familia = familias[0];
                activarBoton(familias[0])
            } else {
                familia = document.getElementById("familia").getElementsByClassName("enabled")[0].innerText;
            }      
        }

        escalasAuxiliaresParaActivarTeclasPiano.push(new Escala(
            undefined,
            undefined,
            tonica,
            familia,
            modo,
            undefined,
            undefined,
        ));    

        activarBoton(modo);

        activarEscalaPiano(escalasAuxiliaresParaActivarTeclasPiano);
    }
}

// Función para reproducir el sonido
function reproducirSonido(tonica) {
        let audio = sonidos[tonicasOrdenadas.indexOf(tonica)];
        audio.currentTime = 0
        audio.play();
}
