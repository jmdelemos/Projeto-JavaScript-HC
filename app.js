const livros = require('./database')
//console.log(livros)

// Obter a entrada do usuário

// Ciação da variável readline para uso das funcionalidades
// da biblioteca readline-sync.
const readline = require('readline-sync')

// question permite fazer perguntas ao usuário
const entradaInicial = readline.question('Deseja buscar um livro? S/N\n')

// Verificação do valor obtido pela variavel entradaInicial

/* Caso a resposta seja Sim ("S"), mostra as categorias disponíveis,
 em seguida pergunta qual a categoria a ser escolhida.*/

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Estas são as categorias disponíveis: ')
    console.log('Produtividade', '/História brasileira', '/Américas', '/Estilo de vida', '/Tecnologia')
    
    const entradaCategoria = readline.question('Qual categoria você escolhe?\n')
    
    // Busca os livros da categoria passada pelo usuário
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
    // Caso resposta seja Não ("N"), mostra todos os livros 
    // ordenados pelo número de páginas

    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas) // Compara o número de paginas a cada 2 libros
    
    console.log('Estes são todos os livros disponíveis')
    console.table(livrosOrdenados)



}

