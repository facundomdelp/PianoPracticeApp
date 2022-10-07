// Declaro e inicializo listado de arrays.
const tonicaPrincipiante = ["FA", "DO", "SOL"];
const tonicaIntermedio = tonicaPrincipiante.concat(["RE", "LA", "MI", "SI", "SIb"]);
const tonicaAvanzado = tonicaIntermedio.concat(["REb", "MIb", "FA#", "LAb"]);
const tecnica = ["Legato", "Staccato"];
const nivel = ["Piano", "Forte", "Mezzoforte"];
const familia = ["Melódica mayor", "Melódica menor", "Armónica mayor", "Armónica menor",];
const modoIntermedio = ["Jónico", "Eólico"]; // NOTA: jónico es mayor y eólico es menor. En dificultad intermedio queda redundante!!!
const modoAvanzado = modoIntermedio.concat(["Dórico", "Locrio", "Lidio", "Mixolidio", "Frigio"]);
const tipo = ["Escala", "Arpegio", "Acorde"]; // por ahora no se utiliza en el simulador.
const velocidadEnBPM = [80, 100, 60]; // por ahora no se utiliza en el simulador - debe ir en función de la cantidad de ejercicios, sumando de 5 en 5 o de 10 en 10.
const tiempoEnSegundos = 60; // por ahora no se utiliza en el simulador.


// FUNCIONES
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
    constructor (ejercicio, dificultad, tonica, familia, modo, tecnica, nivel) {
        this.ejercicio = ejercicio;
        this.dificultad = dificultad;
        this.tonica = tonica;
        this.familia = familia;
        this.modo = modo;
        this.tecnica = tecnica;
        this.nivel = nivel;
    }
}

// SIMULADOR
// Usuario ingresa la cantidad de ejercicios a llevar a cabo.
let cantidadEjercicios = prompt("Ingrese cantidad de ejercicios a realizar: ");
const escalas = [];

// Usuario ingresa el nivel de dificultad para definir la complejidad de cada ejercicio musical.
let dificultad = prompt("Ingrese el nivel de dificultad (Principiante - Intermedio - Avanzado): ");

loop:
for(let i = 1; i <= cantidadEjercicios; i++) {

    // En función de la cantidad de ejercicios y la dificultad de cada uno, se va creando un array de objetos.
    // A medida que se va creando el array, se va lanzando el ejercicio mediante alerts.
    switch (dificultad.toLowerCase()) {

        case "principiante":
            escalas.push(new Escala(
                "Ejercicio " + i,
                dificultad,
                elementoAleatorio(tonicaPrincipiante),
                undefined,
                undefined,
                elementoAleatorio(tecnica),
            ));
            alert(
                escalas[i-1].ejercicio.toUpperCase() + "\n\n" +
                "   - Escala: " + escalas[i-1].tonica + " mayor\n" +
                "   - Técnica: " + escalas[i-1].tecnica
            );
            break;
        
        case "intermedio":
            escalas.push(new Escala(
                "Ejercicio " + i,
                dificultad,
                elementoAleatorio(tonicaIntermedio),
                undefined,
                elementoAleatorio(modoIntermedio),
                elementoAleatorio(tecnica),
            ));
            alert(
                escalas[i-1].ejercicio.toUpperCase() + "\n\n" +
                "   - Escala: " + escalas[i-1].tonica + "\n" +
                "   - Modo: " + escalas[i-1].modo + "\n" +
                "   - Técnica: " + escalas[i-1].tecnica
            );
            break;

        case "avanzado":
            escalas.push(new Escala(
                "Ejercicio " + i,
                dificultad,
                elementoAleatorio(tonicaAvanzado),
                elementoAleatorio(familia),
                elementoAleatorio(modoAvanzado),
                elementoAleatorio(tecnica),
                elementoAleatorio(nivel),
            ));
            alert(
                escalas[i-1].ejercicio.toUpperCase() + "\n\n" +
                "   - Escala: " + escalas[i-1].tonica + "\n" +
                "   - Familia: " + escalas[i-1].familia + "\n" +
                "   - Modo: " + escalas[i-1].modo + "\n" +
                "   - Técnica: " + escalas[i-1].tecnica + "\n" +
                "   - Nivel: " + escalas[i-1].nivel
            );
            break;

        default:
            alert("¡Inténtelo nuevamente!");
            window.location.reload ();
            break loop;
    }
}

// Imprimo en consola todos los ejercicios que se realizaron.
console.log(escalas);