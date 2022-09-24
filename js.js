// let array = [1,2,3,4,5,6,2,2];
// let contador = 0;
// for (let index = 1; index < array.length; index += 1) {
//     contador = 0;
//     for (let index2 = 1; index2 <= index; index += 1) {
//         if (array[index2] === array[index]) {
//             contador+= 1;
//         }
//     }
// }


let numbers = [70, 100, 70, 100, 100];
let newArray = 1;

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    for (let index2 = 0; index2 <= index; index2 +=1) {
        if (numbers[index] === numbers[index + 1]) {
            newArray += 1;
        }
    }
        
    } else {
    newArray = 0;
  }
}

console.log(newArray);