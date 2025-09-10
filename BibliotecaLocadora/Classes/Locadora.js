class Locadora {
    constructor() {
        this.filmes = [];
    }

    adicionarFilme(filme) {
        this.filmes.push(filme);
        console.log(`Filme "${filme.titulo}" adicionado à locadora.`);
    }

    listarFilmes() {
        console.log("Filmes disponíveis:");
        if (this.filmes.length === 0) {
            console.log("Nenhum filme cadastrado.");
        } else {
            this.filmes.forEach((f, i) => {
                const status = f.disponivel ? "Disponível" : "Indisponível";
                console.log(`${i + 1}. ${f.titulo} dirigido por ${f.diretor} - ${status}`);
            });
        }
    }
}

module.exports = Locadora;