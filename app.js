const livros = require('./database')
//console.log(livros)

// Obter a entrada do usuário

// Ciação da variável readline para uso das funcionalidades
// da biblioteca readline-sync.
const readline = require('readline-sync')

// question permite fazer perguntas ao usuário
const entrada_inicial = readline.question('Deseja buscar um livro? S/N')