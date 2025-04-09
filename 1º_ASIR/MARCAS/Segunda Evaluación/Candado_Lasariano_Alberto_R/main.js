// Generar un código aleatorio de 5 caracteres
function generarCodigo() {
    const caracteres = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789/*-+!·$%&()=?¿~#@|\ºª€<>;,.:-_{}ç[]^';
    let codigo = '';
    for (let i = 0; i < 5; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}

const codigoSecreto = generarCodigo();
console.log('Código Secreto (para pruebas):', codigoSecreto);

// Verificar si el código ingresado es correcto
function verificarCodigo() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('input5').value;

    const codigoIngresado = input1 + input2 + input3 + input4 + input5;

    if (codigoIngresado === codigoSecreto) {
        Swal.fire({
            title: "¡Código correcto!",
            timer: 2000,
            icon: "success"
        }).then(() => {
            window.location.href = `2.html?codigo=${codigoSecreto}`; //Redirigir a 2.html
        });
    } else {    
        Swal.fire({
            title: "Código incorrecto, intenta de nuevo.",
            timer: 2000,
            icon: "error"
          });
    }
}

// Asignar la función de verificación al botón
document.querySelector('.boton-centrado').addEventListener('click', verificarCodigo);
