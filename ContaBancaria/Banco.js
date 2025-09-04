class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo; 
    }

depositar(valor) {
    if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
        console.log("Valor de depósito inválido.");
    }
}

sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
        console.log("Saldo insuficiente ou valor de saque inválido.");
    }
}

consultarSaldo() {
    console.log(`Saldo atual: R$${this.saldo}`);
}
}

const conta = new ContaBancaria("João", 1000);
conta.depositar(500);
conta.sacar(200);
conta.sacar(2000);
conta.consultarSaldo();