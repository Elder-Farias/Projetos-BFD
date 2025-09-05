const Livro = require('./Classes/Livro');
const Filme = require('./Classes/Filme');
const Usuario = require('./Classes/Usuario');
const Biblioteca = require('./Classes/Biblioteca');
const Locadora = require('./Classes/Locadora');

// Criando Livros e Filmes
let livro1 = new Livro("1984", "George Orwell");
let livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");
let filme1 = new Filme("Inception", "Christopher Nolan");
let filme2 = new Filme("The Matrix", "The Wachowskis");

// Criando Usuário
let usuario1 = new Usuario("Alice");

// Criando Biblioteca e Locadora
let biblioteca = new Biblioteca();
let locadora = new Locadora();

// Adicionando Livros e Filmes
console.log('----Biblioteca----');
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
console.log('\n----Locadora----');
locadora.adicionarFilme(filme1);
locadora.adicionarFilme(filme2);

console.log('\n----Disponiveis----');
biblioteca.listarLivros();
locadora.listarFilmes();

//Testando Empréstimos e Devoluções
console.log('\n----Empréstimos e Devoluções----');
usuario1.pegarItem(livro2);
usuario1.pegarItem(filme1);
usuario1.listarItensEmprestados();
usuario1.devolverItem(livro2);
usuario1.devolverItem(filme1);

