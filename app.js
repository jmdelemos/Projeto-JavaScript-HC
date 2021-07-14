const livros = require('./database')
//console.log(livros)

// Obter a entrada do usuário

// Ciação da variável readline para uso das funcionalidades
// da biblioteca readline-sync.
const readline = require('readline-sync')

// question permite fazer perguntas ao usuário
const entradaInicial = readline.question('Deseja buscar um livro? S/N')

// Verificação do valor obtido pela variavel entradaInicial

/* Caso a resposta seja Sim ("S"), mostra as categorias disponíveis,
 em seguida pergunta qual a categoria a ser escolhida.*/

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Estas são as categorias disponíveis: ')
    console.log('Produtividade', '/História brasileira', '/Américas', '/Estilo de vida', '/Tecnologia')
    
    const entradaCategoria = readline.question('Qual categoria você escolhe?')
    
    // Busca os livros da categoria passada pelo usuário
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}

// Caso resposta seja Não ("N"), mostra todos os livros 
// ordenados pelo número de páginas