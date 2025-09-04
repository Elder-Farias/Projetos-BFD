class Livro {
  constructor(título, autor, emprestado) {
    this.título = título;
    this.autor = autor;
    this.emprestado = false;
  }
};

class Usuario {
    constructor(nome) {
        this.nome = nome;
  }
  pegarLivro(livro) {
    console.log(`O livro ${livro.título} foi pego por ${this.nome}.`);
    livro.emprestado = true;
 }
};

let usuario1 = new Usuario("Ana");
let livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");
let livro2 = new Livro("1984", "George Orwell");

usuario1.pegarLivro(livro1);
console.log("----------------");
console.log(livro1);
console.log("----------------");
console.log(livro2);