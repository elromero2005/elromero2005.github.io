/* 
Actualiza con el valor 'value' la etiqueta
con nombre 'name'
*/
function setValue(name,value) {
document.getElementsByName(name)[0].value = value;
}
/* 
Devuelve el valor de la etiqueta con nombre 'name'
*/
function getValue(name) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(name).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
}