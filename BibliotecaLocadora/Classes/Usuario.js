class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.itensEmprestados = [];
    }

    pegarItem(item) {
        this.itensEmprestados.push(item);
        console.log(`${this.nome} pegou "${item.titulo}".`);
    }

    listarItensEmprestados() {
        console.log(`Itens emprestados por ${this.nome}:`);
        if (this.itensEmprestados.length === 0) {
            console.log("Nenhum item emprestado.");
        } else {
            this.itensEmprestados.forEach((item, i) => console.log(`${i + 1}. ${item.titulo}`));
        }
    }

    devolverItem(item) {
        const index = this.itensEmprestados.indexOf(item);
        if (index !== -1) {
            item.devolver(this);
            this.itensEmprestados.splice(index, 1);
        } else {
            console.log(`O item "${item.titulo}" não foi emprestado por ${this.nome}.`);
        }
    }
}

module.exports = Usuario;