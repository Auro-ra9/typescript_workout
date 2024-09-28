"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var number = Number(readline.question('enter a number'));
for (var i = 1; i <= 10; i++) {
    console.log(i, '*', number, '=', i * number);
}
