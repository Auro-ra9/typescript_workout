"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function reverseString(num) {
    try {
        var result = num.split('').reverse().join('');
        return result;
    }
    catch (err) {
        console.log("Error on reversing the string ".concat(err));
        return '';
    }
}
var input = readline.question("Enter the string to reverse :");
console.log(reverseString(input));
