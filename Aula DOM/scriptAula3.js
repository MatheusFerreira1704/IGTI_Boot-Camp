// Alterando estilos e classes de elementos com o DOM

// mudando a propriedade do elemento DIV, com o ID caixa.
var caixa = document.getElementById("caixa");
var cx, cy;

function setPos(x, y) {
  //caixa.style = "top" + y + "px; left: " + x + "px";
  // mudando propriedade especifica/ individual
  caixa.style.left = x + "px";
  caixa.style.top = y + "px";
}

// evento mousedown, quando aperta o mouse
caixa.addEventListener("mousedown", iniciaArraste);
// evento mouseUp, quando solta o mouse
document.addEventListener("mouseup", terminaArraste);

function iniciaArraste(evt) {
  /*className, atributo que corresponde e altera a propriedade class
   O className, pode remover a classe do produto, por esse motivo
   trocaremos o className por clasList
  */
  cx = evt.clientX - pxParaNum(caixa.style.left);
  cy = evt.clienteY - pxParaNum(caixa.style.top);

  caixa.classList.add("arrastando");
  // evento mousemove criado para arrastar a caixa movendo o mouse.
  document.addEventListener("mousemove", arrasta);
}

function terminaArraste(evt) {
  caixa.classList.remove("arrastando");
  document.removeEventListener("mousemove", arrasta);
}

function arrasta(evt) {
  var x = evt.clientX;
  var y = evt.clienteY;
  setPos(x - cx, y - cy);
}

function pxParaNum(s) {
  return +s.replace("px", " ");
}
