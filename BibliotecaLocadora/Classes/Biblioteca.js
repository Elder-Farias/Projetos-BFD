class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }

    listarLivros() {
        console.log("Livros disponíveis:");
        if (this.livros.length === 0) {
            console.log("Nenhum livro cadastrado.");
        } else {
            this.livros.forEach((l, i) => {
                const status = l.disponivel ? "Disponível" : "Indisponível";
                console.log(`${i + 1}. ${l.titulo} de ${l.autor} - ${status}`);
            });
        }
    }
}

module.exports = Biblioteca;