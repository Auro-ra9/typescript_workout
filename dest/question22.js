"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function getArray() {
    var arr = [];
    var limit = Number(readline.question("Enter the limit of the array:"));
    for (var i = 0; i < limit; i++) {
        var input = Number(readline.question("Enter the ".concat(i, " element :")));
        arr.push(input);
    }
    return arr;
}
function sumOfArray(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result[i] = arr1[i] + arr2[i];
    }
    return result;
}
function displayArray(arr) {
    console.log(arr);
}
var arr1 = getArray();
var arr2 = getArray();
var sum = sumOfArray(arr1, arr2);
displayArray(sum);
