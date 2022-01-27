// console.log(isNaN ('Hello world'));
// console.log(Number.isNaN('Hello world'));

// let checkItem = 0;

// checkItem = prompt("pls enter the number");

// if (isNaN(checkItem)) {
//     alert('true')
// } else {
//     alert ('false')
// };

let enteredData = 0;

do {
    enteredData = prompt ("Pls enter the data");
} while (isNaN(enteredData) || enteredData == '' || !enteredData.trim());

if (enteredData == null) {
    alert('exit');  
} else {
    alert('Thanks, lets continue...');
}

const enteredNumber = Number(enteredData);
console.log(enteredNumber, 'entered number');
