const canvas = document.getElementById("gameCanvas");

const ctx = canvas.getContext("2d");

let player= {
    x: 50,
    y: 150,
    w: 30,
    h: 30
}

function pintarJugador() {
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.w, player.h);
}

pintarJugador();