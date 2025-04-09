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
// Llamar a setValue al cargar la página
window.onload = function() {
    var nombre = getValue('nombre');
    setValue('nombre', nombre);
    var password = getValue('contraseña');
    setValue('contraseña', password);
    var contador1 = getValue('contador1');
    contador1 = Number(contador1); // Convertir a número
    contador1 += 1; // Sumar 1
    setValue('contador1', contador1);
};