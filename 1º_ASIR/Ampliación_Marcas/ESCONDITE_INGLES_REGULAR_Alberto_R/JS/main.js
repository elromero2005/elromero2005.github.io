let estadoJuego = {
    jugadores: [
        { id: 1, posicion: 0, tieneCorazon: false, accion: null, haElegido: false },
        { id: 2, posicion: 0, tieneCorazon: false, accion: null, haElegido: false },
        { id: 3, posicion: 0, tieneCorazon: false, accion: null, haElegido: false }
    ],
    bolsaDados: ['negro1', 'negro2', 'negro3', 'rojo'],
    dadosNegrosAcumulados: [],
    ronda: 1,
    estado: 'esperando_eleccion',
    idGanador: null
};

const tiposDados = {
    negro1: [1, 1, 1, 1, 2, 2],
    negro2: [1, 1, 1, 1, 0, 0],
    negro3: [1, 1, 0, 0, 0, 0],
    rojo: [1, 1, 1, 1, 1, 0]
};

function tirarDado(dados) {
    let total = 0;
    dados.forEach(dado => {
        const caras = tiposDados[dado];
        const caraAleatoria = caras[Math.floor(Math.random() * caras.length)];
        total += caraAleatoria;
    });
    return total;
}

function actualizarInfoJugadores() {
    for (const jugador of estadoJuego.jugadores) {
        document.getElementById(`corazon${jugador.id}`).textContent = jugador.tieneCorazon ? 'Sí' : 'No';
    }
}

function todosJugadoresElegidos() {
    return estadoJuego.jugadores.every(jugador => jugador.haElegido);
}

function dibujarTablerosColumnas() {
    for (let i = 1; i <= 3; i++) {
        const contenedor = document.getElementById(`tablero${i}`);
        contenedor.innerHTML = '';
        
        for (let j = 0; j < 10; j++) {
            const casilla = document.createElement('div');
            casilla.className = 'casilla-columna';
            
            const jugador = estadoJuego.jugadores.find(j => j.id === i);
            if (jugador && jugador.posicion === j) {
                const posicion = document.createElement('div');
                posicion.className = `posicion-jugador ${jugador.tieneCorazon ? 'corazon' : ''}`;
                
                switch(jugador.id) {
                    case 1: posicion.classList.add('jugador1'); break;
                    case 2: posicion.classList.add('jugador2'); break;
                    case 3: posicion.classList.add('jugador3'); break;
                }
                
                posicion.textContent = jugador.id;
                posicion.style.left = '50%';
                posicion.style.transform = 'translateX(-50%)';
                casilla.appendChild(posicion);
            }
            contenedor.appendChild(casilla);
        }
    }
}

function sacarDado() {
    if (estadoJuego.estado !== 'jugando') return;

    estadoJuego.jugadores = estadoJuego.jugadores.map(jugador => ({
        ...jugador,
        haElegido: false
    }));
    
    let dadosDisponibles = [...estadoJuego.bolsaDados];
    if (dadosDisponibles.length === 0) {
        dadosDisponibles = ['negro1', 'negro2', 'negro3', 'rojo'];
    }
    
    const indiceAleatorio = Math.floor(Math.random() * dadosDisponibles.length);
    const dadoSeleccionado = dadosDisponibles[indiceAleatorio];
    
    const jugadoresActualizados = estadoJuego.jugadores.map(jugador => {
        const colorDado = dadoSeleccionado.startsWith('negro') ? 'negro' : 'rojo';
        
        if (jugador.accion === 'pararse') {
            if (colorDado === 'negro') return jugador;
            else if (colorDado === 'rojo') {
                return { ...jugador, tieneCorazon: jugador.tieneCorazon ? true : true };
            }
        } else if (jugador.accion === 'andar') {
            if (colorDado === 'negro') {
                const nuevosDadosNegros = [...estadoJuego.dadosNegrosAcumulados, dadoSeleccionado];
                const total = tirarDado(nuevosDadosNegros);
                const nuevaPosicion = Math.min(9, jugador.posicion + total);
                document.getElementById(`dado-sacado${jugador.id}`).textContent = total;
                return { ...jugador, posicion: nuevaPosicion };
            } else if (colorDado === 'rojo') {
                if (jugador.tieneCorazon) {
                    return { ...jugador, tieneCorazon: false };
                } else {
                    const dadosActualizados = [...estadoJuego.dadosNegrosAcumulados, dadoSeleccionado];
                    const total = tirarDado(dadosActualizados);
                    const nuevaPosicion = Math.max(0, jugador.posicion - total);
                    document.getElementById(`dado-sacado${jugador.id}`).textContent = total;
                    return { ...jugador, posicion: nuevaPosicion };
                }
            }
        }
        return jugador;
    });
    
    const bolsaActualizada = dadosDisponibles.filter((_, index) => index !== indiceAleatorio);
    const esDadoRojo = dadoSeleccionado === 'rojo';
    const debeReiniciarBolsa = esDadoRojo;
    
    const areaDados = document.getElementById('area-dados');
    const elementoDado = document.createElement('div');
    elementoDado.className = `dado ${dadoSeleccionado === 'rojo' ? 'rojo' : 'negro'}`;
    elementoDado.textContent = dadoSeleccionado === 'rojo' ? 'R' : 'N';
    areaDados.appendChild(elementoDado);
    
    if (debeReiniciarBolsa) {
        const barraVertical = document.createElement('div');
        barraVertical.className = 'barra-vertical';
        areaDados.appendChild(barraVertical);
    }
    
    areaDados.scrollTop = areaDados.scrollHeight;
    
    estadoJuego = {
        ...estadoJuego,
        jugadores: jugadoresActualizados,
        bolsaDados: debeReiniciarBolsa ? ['negro1', 'negro2', 'negro3', 'rojo'] : bolsaActualizada,
        dadosNegrosAcumulados: debeReiniciarBolsa ? [] : [...estadoJuego.dadosNegrosAcumulados, dadoSeleccionado],
        ronda: debeReiniciarBolsa ? estadoJuego.ronda + 1 : estadoJuego.ronda,
        estado: jugadoresActualizados.find(j => j.posicion >= 9) ? 'ganado' : 'esperando_eleccion',
        idGanador: jugadoresActualizados.find(j => j.posicion >= 9)?.id || null
    };

    actualizarUI();
}

function elegirAccion(idJugador, accion) {
    if (estadoJuego.estado !== 'esperando_eleccion') return;
    
    estadoJuego.jugadores = estadoJuego.jugadores.map(j => 
        j.id === idJugador ? { ...j, accion, haElegido: true } : j
    );
    
    estadoJuego.estado = todosJugadoresElegidos() ? 'jugando' : 'esperando_eleccion';
    actualizarUI();
    
    if (todosJugadoresElegidos()) {
        setTimeout(sacarDado, 500);
    }
}

function actualizarUI() {
    actualizarInfoJugadores();
    document.getElementById('ronda').textContent = estadoJuego.ronda;
    
    const mensajeGanador = document.getElementById('mensaje-ganador');
    const reiniciarBoton = document.getElementById('reiniciar-boton');
    
    mensajeGanador.textContent = '';
    
    if (estadoJuego.estado === 'ganado') {
        mensajeGanador.textContent = `¡Jugador ${estadoJuego.idGanador} gana!`;
        reiniciarBoton.classList.remove('oculto');
    } else if (estadoJuego.estado === 'esperando_eleccion') {
        mensajeGanador.textContent = 'Esperando que todos los jugadores elijan una acción';
    }
    
    dibujarTablerosColumnas();
}

function reiniciarJuego() {
    estadoJuego = {
        jugadores: [
            { id: 1, posicion: 0, tieneCorazon: false, accion: null, haElegido: false },
            { id: 2, posicion: 0, tieneCorazon: false, accion: null, haElegido: false },
            { id: 3, posicion: 0, tieneCorazon: false, accion: null, haElegido: false }
        ],
        bolsaDados: ['negro1', 'negro2', 'negro3', 'rojo'],
        dadosNegrosAcumulados: [],
        ronda: 1,
        estado: 'esperando_eleccion',
        idGanador: null
    };
    
    document.getElementById('area-dados').innerHTML = '';
    document.getElementById('reiniciar-boton').classList.add('oculto');
    actualizarUI();
}

// Inicializar juego
actualizarUI();

