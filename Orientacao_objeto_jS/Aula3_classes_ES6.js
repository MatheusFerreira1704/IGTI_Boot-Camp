//Sintaxe ECMA6, muito parecida com JAVA.

class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  // funciona IGUAL ao prototype
  area() {
    return this.altura * this.largura;
  }
}
