"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var annualIncome = Number(readline.question("Enter the annual income :"));
function calculateTax(annualIncome) {
    if (annualIncome > 1000000 && annualIncome <= 5000000) {
        return (annualIncome * (30 / 100));
    }
    else if (annualIncome > 500000 && annualIncome <= 1000000) {
        return (annualIncome * (20 / 100));
    }
    else if (annualIncome > 250000 && annualIncome <= 5000000) {
        return (annualIncome * (5 / 100));
    }
    else if (annualIncome <= 250000) {
        return 0;
    }
    else {
        return 0;
    }
}
console.log(calculateTax(annualIncome));
