// document: é o objeto que representa raíz do DOM
// getElementById: pega referência do HTML pelo ID.
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var r = document.getElementById("r");

/*function calcula() {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  if (isNaN(resultado)) {
    r.textContent = "";
  } else {
    r.textContent = resultado;
  }
}*/

// Pode passar a função dentro do EventListener
document.addEventListener("input", function calcula() {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  r.textContent = isNaN(resultado) ? "" : resultado;
});
