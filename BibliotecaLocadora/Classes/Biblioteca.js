class Biblioteca {
    constructor(livros = []) {
        this.livros = livros;
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`O livro "${livro.titulo}" foi adicionado à biblioteca.`);
    }
    listarLivros() {
        if (this.livros.length === 0) {
            console.log("Nenhum livro na biblioteca.");
        } else {
            console.log("Livros na biblioteca:");
            this.livros.forEach(livro => {
                console.log(`- ${livro.titulo} por ${livro.autor} (${livro.emprestado ? "Emprestado" : "Disponível"})`);
            });
        }
    }
};

module.exports = Biblioteca;