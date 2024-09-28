"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var principle_amount = Number(readline.question('Enter the principle amount'));
var interest_rate = Number(readline.question('Enter the interest rate'));
var years = Number(readline.question('Enter the number of years'));
var si = (principle_amount * interest_rate * years) / 100;
console.log(si);
