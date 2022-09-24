// const newContractedPerson = (completeName) => {
//     const object = {
//         nomeCompleto: completeName,
//         email: `${completeName.replace(' ', '_').toLowerCase()}@trybe.com`
//     }
//     return object;
// }

// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'),
//       id2: callback('Luiza Drumond'),
//       id3: callback('Carla Paiva')
//     }
//     return employees;
//   };

// console.log(newEmployees(newContractedPerson));

// const resultSort = (max) => {
//   const numAleatorio = Math.floor((Math.random() * 5) + 1);
//   return numAleatorio;
// }
// console.log(resultSort());



// USANDO O FOR EACH:

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList);



// USANDO O FIND:

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => numbers.find((number) => number % 3 === 0 && number % 5 === 0);;

// console.log(findDivisibleBy3And5());


// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => names.find((name) => name.length === 5);

// console.log(findNameWithFiveLetters());


const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((element) => element.id === id);
};

console.log(findMusic('31031685'));

function authorBornIn1947() {
  const arroz = books.find((element) => element.author.birthYear === 1947);
  return arroz.author.name
}
// console.log(authorBornIn1947());

function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  // Retorne o nome do livro de menor nome.
  books.forEach((element) => {
    // console.log(element.name)
    if (element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
// console.log(smallerName());

const array = [1, 2, 3, 4, 5, 6, 7];

const sum = () => {
  let agua = 0;
  array.forEach(element => agua += element);
  return agua;
}
// let tropaDeElite = books[0].name;

// for (let i = 0; i < books.length; i += 1) {
//   if (books[i].name.length < tropaDeElite.length) {
//     tropaDeElite = books[i].name;
//   }
// }
// console.log(tropaDeElite);
// Encontre o primeiro livro cujo nome possui 26 caracteres.

const getNamedBook = (quindim) => quindim.find((element) => element.name.length === 26);

function booksOrderedByReleaseYearDesc() {
  const medico = books.sort((a, b) => b.releaseYear - a.releaseYear);
  // console.log();
  return medico;
}
// console.log(booksOrderedByReleaseYearDesc());
// console.log(getNamedBook(books));
function everyoneWasBornOnSecXX() {
  const velhotes = books.every((num) => num.author.birthYear >= 1901);
  return velhotes;
}
function someBookWasReleaseOnThe80s() {
  const velharia = books.some((num) => num.releaseYear >= 1980 && num.releaseYear <= 1989);
  return velharia;
}

function authorUnique() {
  const a = books.every((b) => b.author.birthYear === books.forEach((c) => c.author.birthYear));
  return a;
}
console.log(authorUnique());

function authorUnique() {
  return books.every((book) => !books.some((bookSome) => 
  (bookSome.author.birthYear === book.author.birthYear) && 
  (bookSome.author.name !== book.author.name)));
}