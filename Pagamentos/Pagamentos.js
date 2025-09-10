class Pagamento {
    constructor(valor) {
        this.valor = valor || 0;
    }
}

class PagamentoCartao extends Pagamento {
    constructor(valor, numeroCartao) {
        super(valor);
        this.numeroCartao = numeroCartao;
    }

    pagar() {
        if (this.valor <= 0) {
            console.log("Valor inválido! Não é possível realizar o pagamento.");
        } else {
        const ultimos4 = this.numeroCartao.slice(-4);
        console.log(`Pagamento de R$${this.valor.toFixed(2)} realizado com cartão ending ${ultimos4}`);
        }
    }
}

class PagamentoBoleto extends Pagamento {
    constructor(valor, codigoBarras) {
        super(valor);
        this.codigoBarras = codigoBarras;
    }

    pagar() {
        if (this.valor <= 0) {
            console.log("Valor inválido! Não é possível realizar o pagamento.");
        } else {
        const parteCodigo = this.codigoBarras.slice(0, 5);
        console.log(`Pagamento de R$${this.valor.toFixed(2)} realizado com boleto código ${parteCodigo}...`);
        }
    }
}

class PagamentoPix extends Pagamento {
    constructor(valor, chavePix) {
        super(valor);
        this.chavePix = chavePix;
    }

    pagar() {
        if (this.valor <= 0) {
            console.log("Valor inválido! Não é possível realizar o pagamento.");
        } else {
        console.log(`Pagamento de R$${this.valor.toFixed(2)} realizado via PIX usando chave ${this.chavePix}`);
        }
    }
}

class PaymentProcessor {
    constructor() {
        this.pagamentos = [];
    }

    adicionarPagamento(pagamento) {
        this.pagamentos.push(pagamento);
    }

    processarTodos() {
        console.log("\n--- Processando todos os pagamentos ---");
        this.pagamentos.forEach(p => p.pagar());
    }
}

const processor = new PaymentProcessor();

const cartao1 = new PagamentoCartao(150, "1234567890123456");
const boleto1 = new PagamentoBoleto(200, "23793381286008600012345678901234567890123456");
const pix1 = new PagamentoPix(50, "meuexemplo@exemplo.com");
const pixInvalido = new PagamentoPix(0, "chaveinvalida");

processor.adicionarPagamento(cartao1);
processor.adicionarPagamento(boleto1);
processor.adicionarPagamento(pix1);
processor.adicionarPagamento(pixInvalido);

processor.processarTodos();
