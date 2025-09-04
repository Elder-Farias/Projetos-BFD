class Carro {
    constructor(placa, cor) {
        this.placa = placa;
        this.cor = cor;
    }
}

class Estacionamento {
    constructor(vagas) {
        this.vagas = [];
    }
    adicionarCarro(carro) {
        this.vagas.push(carro);
    }
    listarCarros() {
        return this.vagas;
    }
}

let carro1 = new Carro("ABC-1234", "Vermelho");
let carro2 = new Carro("XYZ-5678", "Azul");
let carro3 = new Carro("LMN-9101", "Preto");

let estacionamento = new Estacionamento();
estacionamento.adicionarCarro(carro1);
estacionamento.adicionarCarro(carro2);
estacionamento.adicionarCarro(carro3);
console.log(estacionamento.listarCarros());