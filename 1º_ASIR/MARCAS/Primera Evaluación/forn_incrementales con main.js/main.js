// Obtener el valor del parámetro de la URL (NAME)
function getValue(name) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(name).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (NAME)
function setValue(name, value) {
    document.getElementsByName(name)[0].value = value;
}
// Obtener el valor del parámetro de la URL (PASSWORD)
function getValue(password) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(password).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (PASSWORD)
function setValue(password, value) {
    document.getElementsByName(password)[0].value = value;
}
// Obtener el valor del parámetro de la URL (CONTADOR1)
function getValue(contador1) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(contador1).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (CONTADOR1)
function setValue(contador1, value) {
    document.getElementsByName(contador1)[0].value = value;
}
// Obtener el valor del parámetro de la URL (CONTADOR21)
function getValue(contador2) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(contador2).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (CONTADOR2)
function setValue(contador2, value) {
    document.getElementsByName(contador2)[0].value = value;
}
// Poner el valor en el campo de entrada (CONTADOR2)
function setValue(contador2, value) {
    document.getElementsByName(contador2)[0].value = value;
}
// Obtener el valor del parámetro de la URL (NLISTA)
function getValue(nLista) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(nLista).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (NLISTA)
function setValue(nLista, value) {
    document.getElementsByName(nLista)[0].value = value;
}
// Obtener el valor del parámetro de la URL (DIA)
function getValue(dia) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(dia).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (DIA)
function setValue(dia, value) {
    document.getElementsByName(dia)[0].value = value;
}
// Obtener el valor del parámetro de la URL (FECHA CUMPLE)
function getValue(fecha_cumple) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(fecha_cumple).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (FECHA CUMPLE)
function setValue(fecha_cumple, value) {
    document.getElementsByName(fecha_cumple)[0].value = value;
}
// Obtener el valor del parámetro de la URL (EMAIL)
function getValue(email) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(email).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (EMAIL)
function setValue(email, value) {
    document.getElementsByName(email)[0].value = value;
}
// Obtener el valor del parámetro de la URL (MES ACTUAL)
function getValue(mesActual) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(mesActual).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (MES ACTUAL)
function setValue(mesActual, value) {
    document.getElementsByName(mesActual)[0].value = value;
}
// Obtener el valor del parámetro de la URL (RANGO)
function getValue(rango) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(rango).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}
// Poner el valor en el campo de entrada (RANGO)
function setValue(rango, value) {
    document.getElementsByName(rango)[0].value = value;
}
// Llamar a setValue al cargar la página
window.onload = function() {
    var nombre = getValue('nombre');
    setValue('nombre', nombre);
    var password = getValue('contraseña');
    setValue('contraseña', nombre);
    var contador1 = getValue('contador1');
    contador1 = Number(contador1); // Convertir a número
    contador1 += 1; // Sumar 1
    setValue('contador1', contador1);
    var nLista = getValue('nLista');
    setValue('nLista', nLista);
    var nombre = getValue('dia');
    setValue('dia', nombre);
    var contador2 = getValue('contador2');
    contador2 = Number(contador2); // Convertir a número
    contador2 += 2; // Sumar 2
    setValue('contador2', contador2);
    var nombre = getValue('fecha_cumple');
    setValue('fecha_cumple', nombre);
    var nombre = getValue('email');
    setValue('email', nombre);
    var nombre = getValue('mesActual');
    setValue('mesActual', nombre);
    var nombre = getValue('rango');
    setValue('rango', nombre);
};