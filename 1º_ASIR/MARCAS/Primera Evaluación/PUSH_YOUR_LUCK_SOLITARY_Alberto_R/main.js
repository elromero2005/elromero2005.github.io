// Definición de variables y constantes
const valoresCartas = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const coloresCartas = ['Diamantes', 'Corazones', 'Tréboles', 'Picas']; // Actualización de colores
let vidas = 3;
let contadorCartas = 1;
let contadorBotones = {
    ALTA: 15,
    BAJA: 15,
    MISMO_COLOR: 5,
    DISTINTO_COLOR: 5,
    SUMA_MENOR_11: 10,
    COMODIN: 3
};
let cartasUtilizadas = []; // Array para rastrear cartas ya utilizadas
let cartaActual = levantarCarta();
document.getElementById("cartaTexto").innerText = `${valoresCartas[cartaActual.valor]} de ${coloresCartas[cartaActual.color]}`; // Mostrar carta actual
let cartaSiguiente;

// Función para levantar una carta aleatoria sin repetición
function levantarCarta() {
    let carta;
    do {
        const valor = Math.floor(Math.random() * valoresCartas.length);
        const color = Math.floor(Math.random() * coloresCartas.length);
        carta = { valor: valor, color: color };
    } while (cartasUtilizadas.some(c => c.valor === carta.valor && c.color === carta.color));
    cartasUtilizadas.push(carta); // Añadir la carta al array de cartas utilizadas
    
    return carta;
}

// Funciones de verificación
function esMasAlta(cartaActual, cartaSiguiente) {
    return cartaSiguiente.valor > cartaActual.valor;
}

function esMasBaja(cartaActual, cartaSiguiente) {
    return cartaSiguiente.valor < cartaActual.valor;
}

// Función para determinar el color de un palo
function obtenerColor(palo) {
    if (palo === 'Picas' || palo === 'Tréboles') {
        return 'Negro';
    } else if (palo === 'Corazones' || palo === 'Diamantes') {
        return 'Rojo';
    }
}

// Función para verificar si es del mismo color
function esMismoColor(cartaActual, cartaSiguiente) {
    const colorActual = obtenerColor(coloresCartas[cartaActual.color]);
    const colorSiguiente = obtenerColor(coloresCartas[cartaSiguiente.color]);
    return colorActual === colorSiguiente;
}

// Función para verificar si es de distinto color
function esDistintoColor(cartaActual, cartaSiguiente) {
    const colorActual = obtenerColor(coloresCartas[cartaActual.color]);
    const colorSiguiente = obtenerColor(coloresCartas[cartaSiguiente.color]);
    return colorActual !== colorSiguiente;
}

function esSumaMenor11(cartaActual, cartaSiguiente) {
    const valorActual = cartaActual.valor < 10 ? cartaActual.valor + 1 : 10; // J, Q, K valen 10
    const valorSiguiente = cartaSiguiente.valor < 10 ? cartaSiguiente.valor + 1 : 10;
    return (valorActual + valorSiguiente < 11);
}

// Función para actualizar el contador de botones
function actualizarContador(botonId, tipo) {
    const boton = document.getElementById(botonId);
    if (contadorBotones[tipo] > 0) {
        contadorBotones[tipo]--;
        boton.textContent = `${tipo} (${contadorBotones[tipo]})`;
        
        // Deshabilitar el botón si el contador llega a 0
        if (contadorBotones[tipo] === 0) {
            boton.disabled = true;
        }
    }
}

// Función para deshabilitar todos los botones
function deshabilitarBotones() {
    const botones = document.querySelectorAll('#botones button');
    botones.forEach(boton => {
        boton.disabled = true;
    });
}

// Función principal del juego
function jugar(opcion) {
    if (vidas <= 0) {
        // Incrementar el contador antes de mostrar el resultado
        contadorCartas++;
        document.getElementById("contadorCartas").innerText = 'Cartas levantadas: ' + contadorCartas; // Actualizar contador en HTML
        document.getElementById("vidas").innerText = `Vidas: ${vidas}`; // Asegúrate de que se actualice aquí
        document.getElementById("cartaTexto").innerText = `${valoresCartas[cartaActual.valor]} de ${coloresCartas[cartaActual.color]}`;
        document.getElementById("resultado").innerText = `Fin de la partida. Puntuación: ${contadorCartas}`;
        deshabilitarBotones(); // Deshabilitar botones al finalizar
        return;
    }

    cartaSiguiente = levantarCarta();
    let acierto = false;

    switch (opcion) {
        case 'ALTA':
            if (esMasAlta(cartaActual, cartaSiguiente)) {
                acierto = true;
            }
            break;
        case 'BAJA':
            if (esMasBaja(cartaActual, cartaSiguiente)) {
                acierto = true;
            }
            break;
        case 'MISMO_COLOR':
            if (esMismoColor(cartaActual, cartaSiguiente)) {
                acierto = true;
            }
            break;
        case 'DISTINTO_COLOR':
            if (esDistintoColor(cartaActual, cartaSiguiente)) {
                acierto = true;
            }
            break;
        case 'SUMA_MENOR_11':
            if (esSumaMenor11(cartaActual, cartaSiguiente)) {
                acierto = true;
            }
            break;
        case 'COMODIN':
            acierto = true; // Solo levanta la siguiente carta
            break;
        case 'PLANTARSE':
            document.getElementById("resultado").innerText = `Fin de la partida. Puntuación: ${contadorCartas}`;
            deshabilitarBotones(); // Deshabilitar botones al finalizar
            return;
    }

    // Actualizar contadores y vidas
    contadorCartas++;
    if (acierto) {
        actualizarContador(`btn${opcion}`, opcion); // Actualizar contador del botón
        document.getElementById("cartaTexto").innerText = `${valoresCartas[cartaSiguiente.valor]} de ${coloresCartas[cartaSiguiente.color]}`;
        document.getElementById("cartaActualTexto").innerText = `Acierto!`;
    } else {
        vidas--;
        actualizarContador(`btn${opcion}`, opcion); // Actualizar contador del botón
        // Mostrar la carta siguiente incluso si hay un fallo
        document.getElementById("cartaTexto").innerText = `${valoresCartas[cartaSiguiente.valor]} de ${coloresCartas[cartaSiguiente.color]}`;
        document.getElementById("cartaActualTexto").innerText = `Fallo! Pierdes una vida. Vidas restantes: ${vidas}`;
        if (vidas === 0) {
            contadorCartas = '0';
            document.getElementById("resultado").innerText = "Fin de la partida. Puntuación: " + contadorCartas;
            deshabilitarBotones(); // Deshabilitar botones al finalizar
            document.getElementById("vidas").innerText = `Vidas: ${vidas}`;
            document.getElementById("contadorCartas").innerText = `Cartas levantadas: ${contadorCartas}`;
            return;
        }
    }

    // Actualizar vidas y contador de cartas en el HTML
    document.getElementById("vidas").innerText = `Vidas: ${vidas}`;
    document.getElementById("contadorCartas").innerText = `Cartas levantadas: ${contadorCartas}`;

    // Actualizar carta actual
    cartaActual = cartaSiguiente;
}

// Asignar eventos a los botones
document.getElementById('btnALTA').addEventListener('click', function() {
    jugar('ALTA');
});
document.getElementById('btnBAJA').addEventListener('click', function() {
    jugar('BAJA');
});
document.getElementById('btnMISMO_COLOR').addEventListener('click', function() {
    jugar('MISMO_COLOR');
});
document.getElementById('btnDISTINTO_COLOR').addEventListener('click', function() {
    jugar('DISTINTO_COLOR');
});
document.getElementById('btnSUMA_MENOR_11').addEventListener('click', function() {
    jugar('SUMA_MENOR_11');
});
document.getElementById('btnCOMODIN').addEventListener('click', function() {
    jugar('COMODIN');
});
document.getElementById('btnPLANTARSE').addEventListener('click', function() {
    jugar('PLANTARSE');
});