//Crear variables

const canvas = document.getElementById("gameCanvas");

const ctx = canvas.getContext("2d");

let player= {
    x: 50,
    y: 150,
    w: 30,
    h: 60,
    paso: 5
}

const diana = {
    x: 700,
    y: 150,
    w: 50,
    h: 50,
    imagen: new Image()
}

diana.imagen.src = "images/diana.png";

let ball= {
    x: 80,
    y: 140,
    w: 10,
    h: 10
}
let exiteBola= false;

//Funciones

function pintarJugador() {
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.w, player.h);
}

function pintarDiana() {
    ctx.drawImage(diana.imagen, diana.x, diana.y, diana.w, diana.h);
}

function pintarBola() {
    if (exiteBola) { // Si la bola existe
    ball.x = ball.x + ball.velocidad; // Mueve la bola hacia la derecha
    ctx.fillStyle = "black";
    ctx.beginPath(); // Inicia un nuevo camino
    ctx.arc(ball.x + ball.w / 2, ball.y + ball.h / 2, ball.w / 2, 0, Math.PI * 2); // Dibuja un círculo
    ctx.fill(); // Rellena el círculo con el color especificado
    if ((exiteBola) && (ball.x > canvas.width)) { // Si la bola sale del canvas
        exiteBola = false; // Reinicia el estado de la bola
    }
}
}

//Eventos

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") {
        player.y = player.y - player.paso;
    }
    else if (e.key === "ArrowDown") {
        player.y = player.y + player.paso;
    }
    else if (e.code === 'Space') { // Si se presiona la tecla de espacio
        if (!exiteBola) { // Solo crea la bola si no existe
            exiteBola = true;
            ball.x = player.x + player.w - ball.w / 2; // Posición inicial de la bola (centro del jugador)
            ball.y = player.y + player.h / 2 - ball.w / 2; // Posición inicial de la bola (arriba del jugador)
            ball.velocidad = 5; // Velocidad de la bola
        }
    }
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    pintarJugador();
    pintarDiana();
    pintarBola();
    requestAnimationFrame(gameLoop); // Solicitar el siguiente frame
}

// Iniciar el bucle del juego

gameLoop();