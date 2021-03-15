/*
CRIANDO ELEMENTOS DINÂMICOS
*/

// variavel que busca todos os fieldset da página.
var fsList = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fsList.length; i++) {
  initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs) {
  //Criando elemento botão dinamicamente
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";
  addButton.type = "button";

  // adicionando botões filhos
  fs.appendChild(addButton);

  var fristInput = fs.querySelector("input");

  //adicionando evento CLICK ao botão
  addButton.addEventListener("click", function () {
    // Criando elemento div
    var div = document.createElement("div");

    //Criando novo elemento de input.
    var newInput = document.createElement("input");
    //Referênciado para que o novo input tenha nome e tipo igual ao do primeiro input
    newInput.name = fristInput.name;
    newInput.type = fristInput.type;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";

    div.appendChild(newInput);
    div.appendChild(deleteButton);

    // Criando o evento de excluir pelo botão.
    deleteButton.addEventListener("click", function () {
      div.remove();
    });
    // adicionando uma div filha antes do botão
    fs.insertBefore(div, addButton);
  });
}
