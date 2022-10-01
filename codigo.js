// Defino algunas variables que se inicializarán luego
let tecnica;
let escala;
let nivel;

let tec;
let esc;
let niv;

// Defino e inicializo listado de constantes
const TECNICA_1 = "legato";
const TECNICA_2 = "staccato";

const ESCALA_1 = "FA";
const ESCALA_2 = "DO";
const ESCALA_3 = "SOL";
const ESCALA_4 = "RE";
const ESCALA_5 = "SI";
const ESCALA_6 = "SIb";
const ESCALA_7 = "MI";
const ESCALA_8 = "LA";
const ESCALA_9 = "REb";
const ESCALA_10 = "MIb";
const ESCALA_11 = "FA#";
const ESCALA_12 = "LAb";

const NIVEL_1 = "piano";
const NIVEL_2 = "forte";
const NIVEL_3 = "mezzoforte";

// Defino función que arroje un número aleatorio entero
function enteroAleatorio (max) {
    return Math.ceil(Math.random()*max);
}

//SIMULADOR

// Usuario ingresa su nivel de dificultad para definir la complejidad de los ejercicios musicales
let dificultad = prompt ("Ingrese el nivel de dificultad (Principiante - Intermedio - Avanzado): ");

// A partir del ingreso del usuario, se definen los ejercicios de manera aleatoria

for (let i = 1; i <= 3; i++) {

    if (dificultad.toLowerCase() == "principiante") {

        tec = enteroAleatorio (1);
        esc = enteroAleatorio (4);
        
        tecnica = eval ("TECNICA_" + tec);
        escala = eval ("ESCALA_" + esc);

        alert ("EJERCICIO " + i + ": Realice la escala de " + escala + " mayor en " + tecnica);

    } else if (dificultad.toLowerCase() == "intermedio") {

        tec = enteroAleatorio (2);
        esc = enteroAleatorio (8);

        tecnica = eval ("TECNICA_" + tec);
        escala = eval ("ESCALA_" + esc);

        alert ("EJERCICIO " + i + ": Realice la escala de " + escala + " mayor en " + tecnica);

    } else if (dificultad.toLowerCase() == "avanzado") {

        tec = enteroAleatorio (2);
        esc = enteroAleatorio (12);
        niv = enteroAleatorio (3);

        tecnica = eval ("TECNICA_" + tec);
        escala = eval ("ESCALA_" + esc);
        nivel = eval ("NIVEL_" + niv);

        alert ("EJERCICIO " + i + ": Realice la escala de " + escala + " mayor en " + tecnica + " y " + nivel);

    } else {
        alert ("¡Inténtelo nuevamente!");
        window.location.reload ();
        break;
    }

}