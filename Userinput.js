const prompt = require('prompt-sync')();


// Number, parseInt, ~ , +
const  num1 = parseInt(prompt("Enter first number :"));
const num2 = parseInt(prompt("Enter second number :"));


console.log("Enter 1 for ADD, 2 for Sub,  3 for mul , 4 for DIV");


const option = prompt("Enter your choice : ");


if( option == 1){
  console.log("Result is ", num1+num2);
}
if (option == 2) {
  console.log("Result is ", num1 - num2);
}
if (option == 3) {
  console.log("Result is ", num1 * num2);
}
if (option == 4) {
  console.log("Result is ", num1 / num2);
}

// Adding in the middle

const arr = [100,230,400,700]; // 75

var middle = Math.floor(arr.length / 2)
arr.splice(middle, 0, "Lene");
console.log(arr)
