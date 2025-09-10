class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    pegar(usuario) {
        if (!this.disponivel) {
            console.log(`O livro "${this.titulo}" não está disponível.`);
            return false;
        }
        if (usuario.itensEmprestados.length >= 3) {
            console.log(`${usuario.nome} já atingiu o limite de 3 itens.`);
            return false;
        }
        this.disponivel = false;
        usuario.pegarItem(this);
        return true;
    }

    devolver(usuario) {
        this.disponivel = true;
        console.log(`${usuario.nome} devolveu o livro "${this.titulo}".`);
    }
}

module.exports = Livro;