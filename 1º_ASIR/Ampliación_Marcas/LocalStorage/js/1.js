
//localStorage.setItem('nombre','Movil_de_Raul')

//localStorage.setItem('nombre2','Album_de_Brito')

//alert(localStorage.getItem('nombre2'))

//let aFrutas = ['manzana','pera','uva']

//localStorage.setItem('frutas',JSON.stringify(aFrutas))

const miBoton = document.getElementById("boton");

miBoton.addEventListener("click", function() {
    let clave = document.getElementById("clave").value;
    let valor = document.getElementById("valor").value;
    localStorage.setItem(clave, valor);
});

/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", function() {
        let clave = document.getElementById("clave").value;
        let valor = document.getElementById("valor").value;

        if (clave && valor) {
            localStorage.setItem(clave, valor);
            alert("Datos guardados en Local Storage");
        } else {
            alert("Por favor, introduce tanto la clave como el valor.");
        }
    });
});*/
