"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var limit = Number(readline.question("Enter a limit\t"));
var sum = 0;
for (var i = 1; i <= limit; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log('Sum of odd numbers: ', sum);
