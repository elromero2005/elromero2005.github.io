function jugar() {
    // Variables
    let dado1 = Math.floor(Math.random() * 12) + 1;    
    let dado2 = Math.floor(Math.random() * 12) + 1;
    let sumaDados = dado1 + dado2;
    let numero = Math.floor(Math.random() * 5) + 1;
    let oportunidades = 2;
    let adivinado = false;
    let clavebinaria = Math.floor(Math.random() * 8).toString(2).padStart(3, '0');
    let intentosclavebinaria = 3;
    let adivinadoclavebinaria = false;
    let pregunta = "¿Cuántos planetas hay en el sistema solar?";
    let respuestaCorrecta = 8;

    // Nivel 1: Dados
    if (sumaDados <= 15) {
        console.log("Dedicate a otra cosa");
        return;
    }

    // Nivel 2: Número oculto
    while (oportunidades > 0 && !adivinado) {
        let intento = prompt(`Adivina el número (entre 1 y 5). Te quedan ${oportunidades} oportunidades:`);
        if (intento == numero) {
            adivinado = true;
        } else {
            oportunidades--;
            if (oportunidades == 0) {
                console.log("Eres malill@");
            } else {
                console.log("Vuelve a intentarlo");
            }
        }
    }

    if (adivinado) {
        // Nivel 3: Clave Binaria
        while (intentosclavebinaria > 0 && !adivinadoclavebinaria) {
            let intentoClavebinaria = prompt(`Adivina la clave binaria (3 bits). Te quedan ${intentosclavebinaria} oportunidades:`);
            if (intentoClavebinaria === clavebinaria) {
                adivinadoclavebinaria = true;
            } else {
                intentosclavebinaria--;
                if (intentosclavebinaria == 0) {
                    console.log("Eres buenicill@");
                } else {
                    console.log("Vuelve a intentarlo");
                }
            }
        }
    }

    if (adivinadoclavebinaria) {
        // Nivel 4: Boss
        let respuesta = prompt(pregunta);
        if (parseInt(respuesta) === respuestaCorrecta) {
            console.log("You are de Best");
        } else {
            console.log("Eres grande");
        }
    }
}

jugar();