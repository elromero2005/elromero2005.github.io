let numeroAleatorio = Math.floor(Math.random() * 13) + 1;
let numeroAleatorio1 = Math.floor(Math.random() * 13) + 1;
let numeroAleatorio2 = Math.floor(Math.random() * 13) + 1;

if (numeroAleatorio > 10 || numeroAleatorio1 > 10 || numeroAleatorio2 > 10) {
    numeroAleatorio = 10;
    numeroAleatorio1 = 10;
    numeroAleatorio2 = 10;
}

console.log('la carta es ' +numeroAleatorio)
console.log('la carta es ' +numeroAleatorio1)
console.log('La suma nueva de tus cartas es ' + (numeroAleatorio + numeroAleatorio1))

let palabro = prompt("Carta más(c) o Plantarse(p)");

if (palabro == 'c') {
    console.log("El jugador continúa.");
    console.log('la carta es ' +numeroAleatorio2)
    console.log('La suma nueva de tus cartas es ' + (numeroAleatorio + numeroAleatorio1 + numeroAleatorio2))
} else if (palabro == 'p') {
    console.log("El jugador se planta.");
} else {
    console.log("Opción no válida. Por favor, introduce 'c' para continuar o 'p' para plantarse.");
}

