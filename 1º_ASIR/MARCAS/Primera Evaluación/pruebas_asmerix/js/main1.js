function jugar() {
    // Nivel 1: Dados
    let dado1 = Math.floor(Math.random() * 12) + 1;
    let dado2 = Math.floor(Math.random() * 12) + 1;
    let sumaDados = dado1 + dado2;
    
    if (sumaDados <= 15) {
        console.log("Dedicate a otra cosa");
        return; // Termina la función si la suma es menor o igual a 15
    }
    
    // Nivel 2: Número oculto
    let numero = Math.floor(Math.random() * 5) + 1;
    let oportunidades = 3; // Cambiado a 3 oportunidades

    let adivinado = false; // Variable para verificar si se adivina el número
    while (oportunidades > 0 && !adivinado) {
        let intento = prompt(`Adivina el número (entre 1 y 5). Te quedan ${oportunidades} oportunidades:`);

        if (parseInt(intento) === numero) {
            adivinado = true; // Si adivina, cambia la variable a true
        } else {
            oportunidades--; // Reduce las oportunidades
            if (oportunidades === 0) {
                console.log("Eres m@ll@");
            } else {
                console.log("Intenta de nuevo.");
            }
        }
    }

    if (adivinado) {
        // Nivel 3: Clave binaria
        let clave = Math.floor(Math.random() * 8).toString(2).padStart(3, '0');
        let intentosClave = 3; // Oportunidades para la clave binaria

        let adivinadoClave = false; // Variable para verificar si se adivina la clave
        while (intentosClave > 0 && !adivinadoClave) {
            let intentoClave = prompt(`Adivina la clave binaria (3 bits). Te quedan ${intentosClave} oportunidades:`);

            if (intentoClave === clave) {
                adivinadoClave = true; // Si adivina, cambia la variable a true
            } else {
                intentosClave--; // Reduce las oportunidades
                if (intentosClave === 0) {
                    console.log("Eres buenicill@");
                } else {
                    console.log("Intenta de nuevo.");
                }
            }
        }

        if (adivinadoClave) {
            // Nivel 4: Boss
            let pregunta = "¿Cuántos planetas hay en el sistema solar?";
            let respuestaCorrecta = 8;
            let respuesta = prompt(pregunta);
            
            if (parseInt(respuesta) === respuestaCorrecta) {
                console.log("You are de Best");
            } else {
                console.log("Eres grande");
            }
        }
    }
}

jugar();
