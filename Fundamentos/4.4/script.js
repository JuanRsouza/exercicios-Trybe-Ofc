// // 1 - Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
// name: 'Marta',
// lastName: 'Silva',
// age: 34,
// medals: { golden: 2, silver: 3 }
// };

// console.log(player);

// // 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

// console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' ' + 'tem ' + player['age'] + ' anos de idade.');


// // 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

// player ['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
// player ['fullName'] = player.name + ' ' + player.lastName;

// console.log(player)

// // 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por 6 vezes.' )

// // 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

// console.log('A jogadora ' + player.fullName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

//---------------------------------


// FOR IN  E FOR OF

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// // for (let index in names) {
// //   console.log(`Olá ${names[index]}`);
// // }


// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

//--------------------------------------------

// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".


// function verificationPositiveNegative (positiveOrNegative) {
//     if (positiveOrNegative > 0) {
//         return 'O número ' + positiveOrNegative + ' é positivo.'
//     } else if (positiveOrNegative < 0) {
//         return 'O número ' + positiveOrNegative + ' é negativo.'
//     } else {
//         return 'Zero'
//     }
// }

// console.log(verificationPositiveNegative(0));

//--------------------------------------------

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log(`Bem vinda, ${info.personagem}`);

//--------------------------------------------

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info ['recorrente'] = 'Sim';

console.log(info);