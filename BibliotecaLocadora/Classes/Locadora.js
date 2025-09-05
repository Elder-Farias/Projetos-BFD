class Locadora {
    constructor(filmes = []) {
        this.filmes = filmes;
    }
    adicionarFilme(filme) {
        this.filmes.push(filme);
        console.log(`O filme "${filme.titulo}" foi adicionado à locadora.`);
    }  
    listarFilmes() {
        if (this.filmes.length === 0) {
            console.log("Nenhum filme na locadora.");
        } else {
            console.log("Filmes na locadora:");
            this.filmes.forEach(filme => {
                console.log(`- ${filme.titulo} por ${filme.diretor} (${filme.emprestado ? "Emprestado" : "Disponível"})`);
            });
        }
    }
};

module.exports = Locadora;