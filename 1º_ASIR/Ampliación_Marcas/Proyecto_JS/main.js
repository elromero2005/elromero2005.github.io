let aBaraja =[1,2,3,4,5,6,7,8,9,10,11,12]

console.log(aBaraja)

function shuffleArray(arr) {
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
}

shuffleArray(aBaraja);
console.log(aBaraja);

let aJugador1 = [];
aJugador1.push(aBaraja[0]);
aJugador1.push(aBaraja[4]);
aJugador1.push(aBaraja[8]);
console.log ("Las cartas del jugador 1 son: " + aJugador1);

let aJugador2 = [];
aJugador2.push(aBaraja[1]);
aJugador2.push(aBaraja[5]);
aJugador2.push(aBaraja[9]);
console.log ("Las cartas del jugador 2 son: " + aJugador2);

let aJugador3 = [];
aJugador3.push(aBaraja[2]);
aJugador3.push(aBaraja[6]);
aJugador3.push(aBaraja[10]);
console.log ("Las cartas del jugador 3 son: " + aJugador3);

let aJugador4 = [];
aJugador4.push(aBaraja[3]);
aJugador4.push(aBaraja[7]);
aJugador4.push(aBaraja[11]);
console.log ("Las cartas del jugador 4 son: " + aJugador4);

/*
funcion de calidad 
decir que jugador va mejor y performance
*/

// Modificar la función calidad para que devuelva la suma
function calidad(a) {
    let suma = 0;
    for (let index = 0; index < a.length; index++) {
        suma += a[index];
    }
    return suma;
}

// Calcular las sumas de cada jugador
let sumaJugador1 = calidad(aJugador1);
let sumaJugador2 = calidad(aJugador2);
let sumaJugador3 = calidad(aJugador3);
let sumaJugador4 = calidad(aJugador4);

console.log("La suma de las cartas del jugador 1 es: " + sumaJugador1);
console.log("La suma de las cartas del jugador 2 es: " + sumaJugador2);
console.log("La suma de las cartas del jugador 3 es: " + sumaJugador3);
console.log("La suma de las cartas del jugador 4 es: " + sumaJugador4);

// Comparar las sumas y determinar cuál es la más alta
let maxSuma = Math.max(sumaJugador1, sumaJugador2, sumaJugador3, sumaJugador4);
let jugadorGanador;

if (maxSuma === sumaJugador1) {
    jugadorGanador = "Jugador 1";
} else if (maxSuma === sumaJugador2) {
    jugadorGanador = "Jugador 2";
} else if (maxSuma === sumaJugador3) {
    jugadorGanador = "Jugador 3";
} else if (maxSuma === sumaJugador4) {
    jugadorGanador = "Jugador 4";
}

// Imprimir el resultado
console.log("El jugador con la suma más alta es: " + jugadorGanador + " con una suma de " + maxSuma);



