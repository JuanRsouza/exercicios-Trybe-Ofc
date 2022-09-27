const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


//   Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

//   function nameAndAge(listaDeLivros) {
//     const mapeamentoLivros = listaDeLivros.map((livro) => 
//         ({
//             age: livro.releaseYear - livro.author.birthYear,
//             author: livro.author.name
//         })
//         )
//         mapeamentoLivros.sort((a, b) => (a.age - b.age) )
//         return mapeamentoLivros;
//   }
//   console.log(nameAndAge(books));

// const expectedResult = [
//     { 
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965
//     }
//   ];

//   Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia

// function fantasyOrScienceFiction(booksList) {
//   return booksList.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
// }
// console.log(fantasyOrScienceFiction(books));

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.


// function oldBooksOrdered(booksList) {
//   const livrosOrdenados = booksList.filter((book) => book.releaseYear < 1962 );
//   livrosOrdenados.sort((a, b) => (a.releaseYear - b.releaseYear) )
//   return livrosOrdenados;
// }
// console.log(oldBooksOrdered(books));

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia

// function fantasyOrScienceFictionAuthors(listaDeLivros) {
//   return listaDeLivros.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
//   .map((autor) => autor.author.name )
//   .sort()
// }
// console.log(fantasyOrScienceFictionAuthors(books))

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks(listaDeLivros) {
//   const livros = listaDeLivros.filter((book) => book.releaseYear < 1962 )
//   .map((books) => books.name)
//   return livros;
// }
// console.log(oldBooks(books));



// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// De olho na dica 👀: cada inicial termina com um ponto.

// const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName(booksList) {
//   return nameAuthorBook = booksList.find((book) => book.author.name[1] === '.'
//   && book.author.name[4] === '.' 
//   && book.author.name[7] === '.'
//   ).name
// }
// console.log(authorWith3DotsOnName(books));

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumEvenNumbers = (acumulador, indice) => ((indice % 2 === 0) ? acumulador + indice : acumulador);



// const reduce = numbers.reduce(sumEvenNumbers, 0)

// console.log(reduce);

// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: 59 },
//       { name: 'Português', nota: 80 },
//       { name: 'Química', nota: 78 },
//       { name: 'Biologia', nota: 92 },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 76 },
//       { name: 'Português', nota: 90 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 80 },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 91 },
//       { name: 'Português', nota: 85 },
//       { name: 'Química', nota: 92 },
//       { name: 'Biologia', nota: 90 },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 70 },
//       { name: 'Português', nota: 70 },
//       { name: 'Química', nota: 60 },
//       { name: 'Biologia', nota: 50 },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 80 },
//       { name: 'Português', nota: 82 },
//       { name: 'Química', nota: 79 },
//       { name: 'Biologia', nota: 75 },
//     ],
//   },
// ];

// Agora crie uma função usando os dados dos estudantes, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

// const dadosEstudantes = (arrayDeInformacoes) => arrayDeInformacoes.map((estudante) => estudante.materias.map((materias) => materias.nota)
// .reduce((acumulador, indice)) => ((acumulador > indice) ? acumulador : indice));

// console.log(dadosEstudantes(estudantes));

// const getBestClass = (acumulador, indice) => ((acumulador.nota > indice.nota) ? acumulador: indice);

// const reportBetter = (students) => students.map((student) => ({
//   name: student.nome,
//   materia: student.materias.reduce(getBestClass).name,
// }));

// console.log(reportBetter(estudantes));
