class Filme {
    constructor(titulo, diretor, emprestado = false) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.emprestado = emprestado;
    }

emprestarFilme(filme) {
    if (!filme.emprestado) {
        filme.emprestado = true;
        console.log(`O filme "${filme.titulo}" foi emprestado com sucesso.`);
    } else {
        console.log(`O filme "${filme.titulo}" já está emprestado.`);
    }
}

    devolverFilme(filme) {
        if (filme.emprestado) {
            filme.emprestado = false;
            console.log(`O filme "${filme.titulo}" foi devolvido com sucesso.`);
        } else {
            console.log(`O filme "${filme.titulo}" não estava emprestado.`);
        }
    }
};

module.exports = Filme;