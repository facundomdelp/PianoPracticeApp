// CONSTANTES
// Declaro e inicializo listado de arrays.
const dificultades = ["Principiante", "Intermedio", "Avanzado"]
const tonicasPrincipiantes = ["FA", "DO", "SOL"]
const tonicasIntermedias = tonicasPrincipiantes.concat(["RE", "LA", "MI", "SI", "SIb"])
const tonicasAvanzadas = tonicasIntermedias.concat(["REb", "MIb", "FA#", "LAb"])
const familias = ["Melódica mayor", "Melódica menor", "Armónica menor", "Armónica mayor"]
const modosIntermedios = ["Jónico", "Eólico"] // NOTA: jónico es mayor y eólico es menor. A partir de intermedio quedaría redundante!
const modosAvanzados = modosIntermedios.concat(["Dórico", "Frigio", "Lidio", "Mixolidio", "Locrio"])
const tecnicas = ["Legato", "Staccato"]
const niveles = ["Piano", "Forte", "Mezzoforte"]

const aleatorio = ["Aleatorio"]

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
]

// Se construye un array de dos octavas para poder tocar las teclas del piano en función del resultado aleatorio
const dosOctavasOrdenadas = tonicasOrdenadas.concat(tonicasOrdenadas);

const tonicasBlancas = [ // Solo las teclas blancas del piano
    tonicasOrdenadas[0],
    tonicasOrdenadas[2],
    tonicasOrdenadas[4],
    tonicasOrdenadas[5],
    tonicasOrdenadas[7],
    tonicasOrdenadas[9],
    tonicasOrdenadas[11],
]

const tonicasNegras = [ // Solo las teclas negras del piano
    tonicasOrdenadas[1],
    tonicasOrdenadas[3],
    tonicasOrdenadas[6],
    tonicasOrdenadas[8],
    tonicasOrdenadas[10],
]

const modosOrdenados = [ // Ordeno los modos para luego poder calcular el salto de semi-tonos de acuerdo a la familia (ver documentación adjunta de teoría musical)
    modosAvanzados[0],
    modosAvanzados[2],
    modosAvanzados[3],
    modosAvanzados[4],
    modosAvanzados[5],
    modosAvanzados[1],
    modosAvanzados[6],
]

// Array de sonido de las notas musicales
const sonidos = [
    new Audio("https://ia600106.us.archive.org/13/items/24-piano-keys/key01.mp3"),
    new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key02.mp3"),
    new Audio("https://ia600106.us.archive.org/13/items/24-piano-keys/key03.mp3"),
    new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key04.mp3"),
    new Audio("https://ia600106.us.archive.org/13/items/24-piano-keys/key05.mp3"),
    new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key06.mp3"),
    new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key07.mp3"),
    new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key08.mp3"),
    new Audio("https://ia600106.us.archive.org/13/items/24-piano-keys/key09.mp3"),
    new Audio("https://ia600106.us.archive.org/13/items/24-piano-keys/key10.mp3"),
    new Audio("https://ia600106.us.archive.org/13/items/24-piano-keys/key11.mp3"),
    new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key12.mp3")
]

// Objeto para inyectar en el HTML
const componentes = [
    {componente: dificultades, nodo: document.getElementById("dificultad")},
    {componente: tonicasOrdenadas, nodo: document.getElementById("tonica")},
    {componente: familias, nodo: document.getElementById("familia")},
    {componente: modosOrdenados, nodo: document.getElementById("modo")},
    {componente: tecnicas, nodo: document.getElementById("tecnica")},
    {componente: niveles, nodo: document.getElementById("nivel")},
]