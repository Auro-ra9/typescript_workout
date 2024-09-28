import * as readline from "readline-sync";

let choice: number = Number(readline.question("Choose an operation\t"));
let num1: number = Number(readline.question("Enter one number\t"));
let num2: number = Number(readline.question("Enter second number\t"));

switch (choice) {
  case 1:
    addition(num1, num2);
    break;
  case 2:
    subtraction(num1, num2);
    break;
  case 3:
    multiplication(num1, num2);
    break;
  case 4:
    division(num1, num2);
    break;

  default:
    console.log("Invalid entry");
    break;
}

function addition(num1: number, num2: number) {
  console.log(num1 + num2);
}
function subtraction(num1: number, num2: number) {
  console.log(num1 - num2);
}
function multiplication(num1: number, num2: number) {
  console.log(num1 * num2);
}
function division(num1: number, num2: number) {
  console.log(num1 / num2);
}
