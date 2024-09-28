"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var choice = Number(readline.question("Choose an operation\t"));
var num1 = Number(readline.question("Enter one number\t"));
var num2 = Number(readline.question("Enter second number\t"));
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
function addition(num1, num2) {
    console.log(num1 + num2);
}
function subtraction(num1, num2) {
    console.log(num1 - num2);
}
function multiplication(num1, num2) {
    console.log(num1 * num2);
}
function division(num1, num2) {
    console.log(num1 / num2);
}
