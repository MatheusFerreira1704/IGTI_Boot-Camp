/* Prototype, faz com que o armazenamento em memoria, esteja relacionado a uma "função generica"
compartilha a função por todas as instancias.*/

function retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
}

// Objeto retangulo agora tem uma função relacionada a ele, como se fosse uma unica função independe da quantidade de retangulos instaciados.
retangulo.prototype.area = function () {
  return this.altura * this.largura;
};
