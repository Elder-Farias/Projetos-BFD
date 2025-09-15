class Veiculo {
    constructor(nome, velocidade, altitude) {
        this.nome = nome;
        this.velocidade = velocidade || 0;
        this.altitude = altitude || 0;
    }
}

class Carro extends Veiculo {
    mover() {
        this.velocidade += 10;
        console.log(`${this.nome} está agora a ${this.velocidade} km/h.`);
    }
}

class Aviao extends Veiculo {
    mover() {
        this.altitude += 1000;
        console.log(`${this.nome} está agora a ${this.altitude} metros de altitude.`);
    }
}

class Barco extends Veiculo {
    mover() {
        this.velocidade += 5;
        console.log(`${this.nome} está agora a ${this.velocidade} nós.`);
    }
}

class Moto extends Veiculo {
    mover() {
        this.velocidade += 15;
        console.log(`${this.nome} está agora a ${this.velocidade} km/h.`);
    }
}

class VeiculoManager {
    constructor() {
        this.veiculos = [];
    }

    adicionarVeiculo(veiculo) {
        this.veiculos.push(veiculo);
    }

    moverTodos() {
        console.log("\n--- Movendo todos os veículos ---");
        this.veiculos.forEach(v => v.mover());
    }

    moverPorTipo(tipo) {
        console.log(`\n--- Movendo todos os veículos do tipo ${tipo} ---`);
        this.veiculos.forEach(v => {
            if (v.constructor.name === tipo) {
                v.mover();
            }
        });
    }
}

const manager = new VeiculoManager();

const carro1 = new Carro("Fusca");
const aviao1 = new Aviao("Boeing 737");
const barco1 = new Barco("Titanic");
const moto1 = new Moto("Harley Davidson");

manager.adicionarVeiculo(carro1);
manager.adicionarVeiculo(aviao1);
manager.adicionarVeiculo(barco1);
manager.adicionarVeiculo(moto1);

manager.moverTodos();
manager.moverPorTipo("Carro");
manager.moverPorTipo("Aviao");
manager.moverPorTipo("Barco");
manager.moverPorTipo("Moto");
