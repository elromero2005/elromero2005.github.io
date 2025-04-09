var numObjetivo = 32;
let maxOpor = 3;
var numJugador;

for (let i = 0; i < 3 ; i++)
    {
        numJugador = prompt("intento nº" + (i) + " ingresa un número del 1 al 3");
        if (numJugador == numObjetivo){
            console.log("Felicidades")
            break;
        }
    }

    let i = 5;
    var numJugador;
    var numObjetivo = 32;
    
    while (i > 0) {
        numJugador = prompt("intento nº" + (i) + " ingresa un número del 1 al 100");
            if (numJugador == numObjetivo){
                console.log("Felicidades")
                break;
            } else{i--}
    }