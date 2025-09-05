class Usuario {
    constructor(nome, itensEmprestados = []) {
        this.nome = nome;
        this.itensEmprestados = itensEmprestados;
    }

    pegarItem(item) {
        if (!item.emprestado) {
            item.emprestarLivro ? item.emprestarLivro(item) : item.emprestarFilme(item);
            this.itensEmprestados.push(item);
        } else {
            console.log(`O item "${item.titulo}" já está emprestado.`);
        }
    }

    devolverItem(item) {
        const index = this.itensEmprestados.indexOf(item);
        if (index !== -1) {
            item.devolverLivro ? item.devolverLivro(item) : item.devolverFilme(item);
            this.itensEmprestados.splice(index, 1);
        } else {
            console.log(`O item "${item.titulo}" não foi emprestado por ${this.nome}.`);
        }
    }
listarItensEmprestados() {
        if (this.itensEmprestados.length === 0) {
            console.log(`${this.nome} não tem itens emprestados.`);
        } else {
            console.log(`Itens emprestados por ${this.nome}:`);
            this.itensEmprestados.forEach(item => {
                console.log(`- ${item.titulo}`);
            });
        }
    }
};

module.exports = Usuario;