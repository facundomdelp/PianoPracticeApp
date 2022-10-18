// Declaro e inicializo listado de arrays.
const dificultades = ["Principiante", "Intermedio", "Avanzado"];
const tonicasPrincipiantes = ["FA", "DO", "SOL"];
const tonicasIntermedias = tonicasPrincipiantes.concat(["RE", "LA", "MI", "SI", "SIb"]);
const tonicasAvanzadas = tonicasIntermedias.concat(["REb", "MIb", "FA#", "LAb"]);
const tecnicas = ["Legato", "Staccato"];
const niveles = ["Piano", "Forte", "Mezzoforte"];
const familias = ["Melódica mayor", "Melódica menor", "Armónica mayor", "Armónica menor",];
const modosIntermedios = ["Jónico", "Eólico"]; // NOTA: jónico es mayor y eólico es menor. En dificultad intermedio queda redundante!!!
const modosAvanzados = modosIntermedios.concat(["Dórico", "Locrio", "Lidio", "Mixolidio", "Frigio"]);

const tonicasOrdenadas = [ // Ordeno las tónicas en el orden conocido: do re mi fa sol.. (con las teclas negras del piano entremedio)
    tonicasAvanzadas[1],
    tonicasAvanzadas[8],
    tonicasAvanzadas[3],
    tonicasAvanzadas[9],
    tonicasAvanzadas[5],
    tonicasAvanzadas[0],
    tonicasAvanzadas[10],
    tonicasAvanzadas[2],
    tonicasAvanzadas[11],
    tonicasAvanzadas[4],
    tonicasAvanzadas[7],
    tonicasAvanzadas[6],
];

const tonicasBlancas = [ // Solo las teclas blancas del piano
    tonicasOrdenadas[0],
    tonicasOrdenadas[2],
    tonicasOrdenadas[4],
    tonicasOrdenadas[5],
    tonicasOrdenadas[7],
    tonicasOrdenadas[9],
    tonicasOrdenadas[11],
];

const tonicasNegras = [ // Solo las teclas negras del piano
    tonicasOrdenadas[1],
    tonicasOrdenadas[3],
    tonicasOrdenadas[6],
    tonicasOrdenadas[8],
    tonicasOrdenadas[10],
];

// Objeto para inyectar en el HTML
const componentes = [
    {componente: dificultades, nodo: document.getElementById("dificultad")},
    {componente: tonicasOrdenadas, nodo: document.getElementById("tonica")},
    {componente: tecnicas, nodo: document.getElementById("tecnica")},
    {componente: niveles, nodo: document.getElementById("nivel")},
    {componente: familias, nodo: document.getElementById("familia")},
    {componente: modosAvanzados, nodo: document.getElementById("modo")},
];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// FUNCIONES
// Función para inyectar todos los botones
function renderizarBotones() {
    for (const componente of componentes) {
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
};

// Botones habilitados para activar
function habilitarBoton (btns) {
    for (const x of btns) {
        document.getElementById(`btn${x}`).removeAttribute("class");
    }
}

// Botones dehabilitados
function deshabilitarBoton(btns) {
    for (const x of btns) {
        document.getElementById(`btn${x}`).className = "disabled";
    }
}

// Botones activados
function activarBoton(btns) {
    for (const x of btns) {
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
    if (dificultad == "Principiante") {
        habilitarBoton(dificultades);
        document.getElementById("btnPrincipiante").className = "enabled";
        habilitarBoton(tonicasPrincipiantes);
        habilitarBoton(tecnicas);
    } else if (dificultad == "Intermedio") {
        habilitarBoton(dificultades);
        document.getElementById("btnIntermedio").className = "enabled";
        habilitarBoton(tonicasIntermedias);
        habilitarBoton(tecnicas);
        habilitarBoton(modosIntermedios);
    } else if (dificultad == "Avanzado") {
        habilitarBoton(dificultades);
        document.getElementById("btnAvanzado").className = "enabled";
        habilitarBoton(tonicasAvanzadas);
        habilitarBoton(tecnicas);
        habilitarBoton(niveles);
        habilitarBoton(familias);
        habilitarBoton(modosAvanzados);
    }
};

// Generar una rutina aleatoria a partir de la dificultad seleccionada
function crearRutina() {
    for (const dificultad of dificultades) {
        let dificultadSeleccionada = dificultad
        dificultadSeleccionada += "." + document.getElementById(`btn${dificultad}`).className;

        if (dificultadSeleccionada == "Principiante.enabled") {
            escalas.push(new Escala(
                "Ejercicio " + parseInt(escalas.length + 1),
                dificultad,
                elementoAleatorio(tonicasPrincipiantes),
                undefined,
                undefined,
                elementoAleatorio(tecnicas),
            ));

            habilitarBoton(tonicasPrincipiantes);
            document.getElementById("btn" + escalas[escalas.length - 1].tonica).className += "principianteEnabled";
            habilitarBoton(tecnicas);
            document.getElementById("btn" + escalas[escalas.length - 1].tecnica).className += "principianteEnabled";

            activarTeclasPiano(escalas[escalas.length - 1].tonica);

        } else if (dificultadSeleccionada == "Intermedio.enabled") {
            escalas.push(new Escala(
                "Ejercicio " + parseInt(escalas.length + 1),
                dificultad,
                elementoAleatorio(tonicasIntermedias),
                undefined,
                elementoAleatorio(modosIntermedios),
                elementoAleatorio(tecnicas),
            ));

            habilitarBoton(tonicasIntermedias);
            document.getElementById("btn" + escalas[escalas.length - 1].tonica).className += "intermedioEnabled";
            habilitarBoton(modosIntermedios);
            document.getElementById("btn" + escalas[escalas.length - 1].modo).className += "intermedioEnabled";
            habilitarBoton(tecnicas);
            document.getElementById("btn" + escalas[escalas.length - 1].tecnica).className += "intermedioEnabled";

            activarTeclasPiano(escalas[escalas.length - 1].tonica);

        } else if (dificultadSeleccionada == "Avanzado.enabled") {
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

            activarTeclasPiano(escalas[escalas.length - 1].tonica);
        }
    }
/*     console.clear(); */
    console.log(escalas);
};

// Función que retorna un número aleatorio entre 0 y max.
function enteroAleatorio(max) {
    return Math.floor(Math.random() * max);
};

// Función para retornar un elemento aleatorio dentro de un array.
function elementoAleatorio(elementos) {
    return elementos[enteroAleatorio(elementos.length)];
};

// Función constructora de objetos a partir de la dificultad del ejercicio.
class Escala {
    constructor (ejercicio, dificultad, tonica, familia, modo, tecnica, nivel) {
        this.ejercicio = ejercicio;
        this.dificultad = dificultad;
        this.tonica = tonica;
        this.familia = familia;
        this.modo = modo;
        this.tecnica = tecnica;
        this.nivel = nivel;
    }
};

// Función para activar las teclas del piano según la tónica
function activarTeclasPiano(tonicaSeleccionada) {

    clasesTeclaBlanca = document.getElementsByClassName("blanca");
    clasesTeclaNegra = document.getElementsByClassName("negra");
    for (const teclas of clasesTeclaBlanca) {
        teclas.className = "blanca";
    };
    for (const teclas of clasesTeclaNegra) {
        teclas.className = "negra";
    };
    if (tonicasBlancas.includes(tonicaSeleccionada)) {
        document.getElementById("piano" + tonicaSeleccionada).className += " blancaTeclaActiva";
    } else if  (tonicasNegras.includes(tonicaSeleccionada)) {
        document.getElementById("piano" + tonicaSeleccionada).className += " negraTeclaActiva";
    }
}