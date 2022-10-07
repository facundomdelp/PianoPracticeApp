// Declaro e inicializo listado de arrays
const tonica = ["FA", "DO", "SOL", "RE", "SI", "SIb", "MI", "LA", "REb", "MIb", "FA#", "LAb"];
const tecnica = ["legato", "staccato"];
const nivel = ["piano", "forte", "mezzoforte"]

// FUNCIONES
//Función que retorna un número aleatorio entre 0 y max
function enteroAleatorio (max) {
    return Math.floor(Math.random()*max);
}

//Función constructora de objetos a partir de la dificultad del ejercicio
class Escala {
    constructor (ejercicio, dificultad, tonica, tecnica, nivel) {
        this.ejercicio = ejercicio;
        this.dificultad = dificultad;
        this.tonica = tonica;
        this.tecnica = tecnica;
        this.nivel = nivel;
    }
}

//SIMULADOR
// Usuario ingresa la cantidad de ejercicios a llevar a cabo
let cantidadEjercicios = prompt ("Ingrese cantidad de ejercicios a realizar: ");
const escalas = [];

for (let i = 1; i <= cantidadEjercicios; i++) {

    // Usuario ingresa el nivel de dificultad para definir la complejidad de cada ejercicio musical
    let dificultad = prompt ("Ingrese el nivel de dificultad (Principiante - Intermedio - Avanzado): ");


    // En función de la cantidad de ejercicios y la dificultad de cada uno, se va creando un array de objetos
    // A medida que se va creando el array, se va lanzando el ejercicio
    switch (dificultad.toLowerCase()) {

        case "principiante":
            escalas.push (new Escala ("Ejercicio " + i, dificultad, tonica[enteroAleatorio(4)], tecnica[enteroAleatorio(1)], ""));
            alert(escalas[i-1].ejercicio.toUpperCase() + ": Realice la escala de " + escalas[i-1].tonica + " mayor en "+ escalas[i-1].tecnica);
            break;
        
        case "intermedio":
            escalas.push (new Escala ("Ejercicio " + i, dificultad, tonica[enteroAleatorio(8)], tecnica[enteroAleatorio(2)], ""));
            alert(escalas[i-1].ejercicio.toUpperCase() + ": Realice la escala de " + escalas[i-1].tonica + " mayor en "+ escalas[i-1].tecnica);
            break;

        case "avanzado":
            escalas.push (new Escala ("Ejercicio " + i, dificultad, tonica[enteroAleatorio(12)], tecnica[enteroAleatorio(2)], nivel[enteroAleatorio(3)]));
            alert(escalas[i-1].ejercicio.toUpperCase() + ": Realice la escala de " + escalas[i-1].tonica + " mayor en "+ escalas[i-1].tecnica + " y " + escalas[i-1].nivel);
            break;

        default:
            alert ("¡Inténtelo nuevamente!");
            break;
    }
}

// Imprimo en consola todos los ejercicios que se realizaron
console.log(escalas);