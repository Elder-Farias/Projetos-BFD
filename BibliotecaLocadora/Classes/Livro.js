class Livro {
    constructor(titulo, autor, emprestado = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = emprestado;
    }

emprestarLivro(livro) {
    if (!livro.emprestado) {
        livro.emprestado = true;
        console.log(`O livro "${livro.titulo}" foi emprestado com sucesso.`);
    } else {
        console.log(`O livro "${livro.titulo}" já está emprestado.`);
    }
};

devolverLivro(livro) {
    if (livro.emprestado) {
        livro.emprestado = false;
        console.log(`O livro "${livro.titulo}" foi devolvido com sucesso.`);
    } else {
        console.log(`O livro "${livro.titulo}" não estava emprestado.`);
    }
};
};

module.exports = Livro;