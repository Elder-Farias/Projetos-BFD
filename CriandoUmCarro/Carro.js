class Carro {
  constructor(marca, cor, ano) {
    this.marca = marca;
    this.cor = cor;
    this.ano = ano;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 10;
  }

  frear() {
    if (this.velocidade >= 10) {
      this.velocidade -= 10;
    } else {
      this.velocidade = 0;
    }
  }

  mostrarInfo() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Cor: ${this.cor}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Velocidade: ${this.velocidade} km/h`);
    console.log('---------------------------');
  }
}

let carro1 = new Carro("Toyota", "Preto", 2020);
let carro2 = new Carro("Honda", "Vermelho", 2022);

carro1.acelerar();
carro2.frear();

console.log("Estado do Carro 1:");
carro1.mostrarInfo();

console.log("Estado do Carro 2:");
carro2.mostrarInfo();