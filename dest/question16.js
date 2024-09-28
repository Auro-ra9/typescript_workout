"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var number = Number(readline.question("Enter a number"));
if (number < 2) {
    console.log(number, "is noot a prime number");
}
for (var i = 2; i <= number; i++) {
    if (i % number === 0) {
        console.log(number, "is not a prime number");
        break;
    }
    else {
        console.log(number, "is a prime number");
        break;
    }
}
