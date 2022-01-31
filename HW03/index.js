// 1.1 Организовать перебор чисел от 1 до 150. 
// 1.2 Посчитать сумму всех чисел 
// 1.3 Посчитать сумму чётных чисел

let sum = 0;
let evenNumbersSum = 0;

for (i = 1; i < 150; i++) {
    sum += i;
    if (i % 2 === 0) {
        evenNumbersSum +=i;
    }
}

console.log(sum);
console.log(evenNumbersSum);
