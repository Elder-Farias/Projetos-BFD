class Filme {
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.disponivel = true;
    }

    pegar(usuario) {
        if (!this.disponivel) {
            console.log(`O filme "${this.titulo}" não está disponível.`);
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
        console.log(`${usuario.nome} devolveu o filme "${this.titulo}".`);
    }
}

module.exports = Filme;