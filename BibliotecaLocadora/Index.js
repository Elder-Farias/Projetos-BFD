const readline = require('readline');
const Livro = require('./Classes/Livro');
const Filme = require('./Classes/Filme');
const Usuario = require('./Classes/Usuario');
const Biblioteca = require('./Classes/Biblioteca');
const Locadora = require('./Classes/Locadora');

// Criando Biblioteca e Locadora
const biblioteca = new Biblioteca();
const locadora = new Locadora();
const usuarios = [];
let usuarioAtual = null;

// Já Cadastrados:
biblioteca.adicionarLivro(new Livro("1984", "George Orwell"));
biblioteca.adicionarLivro(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien"));
locadora.adicionarFilme(new Filme("Inception", "Christopher Nolan"));
locadora.adicionarFilme(new Filme("The Matrix", "The Wachowskis"));

const usuario1 = new Usuario("Alice");
usuarios.push(usuario1);
usuarioAtual = usuario1;

function mostrarUsuarioAtual() {
    if (usuarioAtual) {
        console.log(`\n- Usuário atual: ${usuarioAtual.nome}`);
    } else {
        console.log("\n- Nenhum usuário selecionado no momento.");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --- Menu --- //

function menu() {
    mostrarUsuarioAtual();
    console.log("\n--- Menu ---");
    console.log("[1] Cadastramento de usuário");
    console.log("[2] Listar itens (livros e filmes)");
    console.log("[3] Empréstimo de livro");
    console.log("[4] Empréstimo de filme");
    console.log("[5] Cadastrar itens");
    console.log("[6] Devolução de itens");
    console.log("[7] Listar itens emprestados pelo usuário atual");
    console.log("[8] Trocar usuário atual");
    console.log("[0] Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                cadastrarUsuario();
                break;
            case "2":
                listarItens();
                menu();
                break;
            case "3":
                emprestarLivro();
                break;
            case "4":
                emprestarFilme();
                break;
            case "5":
                cadastrarItens();
                break;
            case "6":
                devolverItens();
                break;
            case "7":
                if (usuarioAtual) usuarioAtual.listarItensEmprestados();
                else console.log("Nenhum usuário selecionado.");
                menu();
                break;
            case "8":
                trocarUsuarioAtual();
                break;
            case "0":
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                menu();
        }
    });
}

// --- Funções do menu --- //

function cadastrarUsuario() {
    rl.question("Digite o nome do usuário: ", (nome) => {
        const novoUsuario = new Usuario(nome);
        usuarios.push(novoUsuario);
        usuarioAtual = novoUsuario;
        console.log(`Usuário "${nome}" cadastrado e selecionado como usuário atual.`);
        menu();
    });
}

function listarItens() {
    biblioteca.listarLivros();
    locadora.listarFilmes();
}

function emprestarLivro() {
    if (!usuarioAtual) {
        console.log("Cadastre um usuário primeiro!");
        menu();
        return;
    }
    biblioteca.listarLivros();
    rl.question("Digite o número do livro para emprestar: ", (num) => {
        const index = parseInt(num) - 1;
        const livro = biblioteca.livros[index];
        if (livro) {
            livro.pegar(usuarioAtual);
        } else {
            console.log("Livro inválido.");
        }
        menu();
    });
}

function emprestarFilme() {
    if (!usuarioAtual) {
        console.log("Cadastre um usuário primeiro!");
        menu();
        return;
    }
    locadora.listarFilmes();
    rl.question("Digite o número do filme para emprestar: ", (num) => {
        const index = parseInt(num) - 1;
        const filme = locadora.filmes[index];
        if (filme) {
            filme.pegar(usuarioAtual);
        } else {
            console.log("Filme inválido.");
        }
        menu();
    });
}

function cadastrarItens() {
    console.log("\nCadastrar item:");
    console.log("1. Livro");
    console.log("2. Filme");
    rl.question("Opção: ", (opcao) => {
        if (opcao === "1") {
            rl.question("Título do livro: ", (titulo) => {
                rl.question("Autor do livro: ", (autor) => {
                    biblioteca.adicionarLivro(new Livro(titulo, autor));
                    menu();
                });
            });
        } else if (opcao === "2") {
            rl.question("Título do filme: ", (titulo) => {
                rl.question("Diretor do filme: ", (diretor) => {
                    locadora.adicionarFilme(new Filme(titulo, diretor));
                    menu();
                });
            });
        } else {
            console.log("Opção inválida.");
            menu();
        }
    });
}

function devolverItens() {
    if (!usuarioAtual || usuarioAtual.itensEmprestados.length === 0) {
        console.log("Nenhum item para devolver.");
        menu();
        return;
    }

    console.log("\nItens emprestados:");
    usuarioAtual.itensEmprestados.forEach((item, i) => console.log(`${i + 1}. ${item.titulo}`));
    rl.question("Digite o número do item para devolver: ", (num) => {
        const index = parseInt(num) - 1;
        const item = usuarioAtual.itensEmprestados[index];
        if (item) {
            usuarioAtual.devolverItem(item);
        } else {
            console.log("Item inválido.");
        }
        menu();
    });
}

function trocarUsuarioAtual() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        menu();
        return;
    }

    console.log("Usuários cadastrados:");
    usuarios.forEach((u, i) => console.log(`${i + 1}. ${u.nome}`));
    rl.question("Escolha o usuário atual pelo número: ", (num) => {
        const index = parseInt(num) - 1;
        if (usuarios[index]) {
            usuarioAtual = usuarios[index];
            console.log(`Usuário atual agora é "${usuarioAtual.nome}".`);
        } else {
            console.log("Número inválido.");
        }
        menu();
    });
}

// --- Inicializa menu --- //
menu();