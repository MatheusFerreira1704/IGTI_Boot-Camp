// Construtores de objeto é feito através da function antes do ES6
function retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

// stanciando um objeto, usando palavra chave NEW
var r1 = new retangulo(4, 8);

//OBS: Em JS, a palavra reservada THIS, está relacionada aonde ela foi chamada, não onde foi instanciada.
