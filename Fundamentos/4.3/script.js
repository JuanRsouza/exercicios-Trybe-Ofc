// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero
// - Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

//-----------------------------------------

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let wordCounter = [];

// for(let i = 5; i >= 0; i -=1) {
// wordCounter+= word[i];
// }
// console.log(wordCounter);

//-----------------------------------------

// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = 0;

// for(let i = 0; i < array.length; i+= 1) {
//   if(array[i].length < array[maiorPalavra].length) {
//   maiorPalavra = i;
//   }
// }
// console.log(array[maiorPalavra]);

//---------------------------------


// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47


let array = [];
let arrayPrimo = [];
let numeroPrimo = 0;

for(let i = 2; i <= 50; i+=1) {
  array.push(i)
}
for(let i = 1; i < array.length; i+= 1) {
  numeroPrimo = 0;
  for(let indexarray = 1; indexarray <= i; indexarray +=1) {
    if(i % indexarray === 0){
      numeroPrimo+= 1;
      }
  }
  if(numeroPrimo === 2) {

  arrayPrimo.push(i);
  }
} 
  

console.log(arrayPrimo);