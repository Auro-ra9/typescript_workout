"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var mark = Number(readline.question('Enter your score'));
if (mark > 50) {
    console.log('Passed');
}
else {
    console.log('Failed');
}
