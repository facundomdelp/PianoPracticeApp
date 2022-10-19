// CONSTANTES
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
