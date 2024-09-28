"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var limit = Number(readline.question("Enter the limit of the array :"));
var arr = [];
for (var i = 0; i < limit; i++) {
    var input = Number(readline.question("Enter the ".concat(i, " element :")));
    arr.push(input);
}
function multiplyAdjacent(arr) {
    var result = [];
    for (var i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] * arr[i + 1]);
    }
    return result;
}
console.log(multiplyAdjacent(arr));
