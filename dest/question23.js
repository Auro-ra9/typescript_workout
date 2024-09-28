"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function getArray() {
    var arr = [];
    var limit = Number(readline.question("Enter the limit of the array:"));
    for (var i = 0; i < limit; i++) {
        var rowArray = [];
        for (var j = 0; j < limit; j++) {
            var input = Number(readline.question("Enter the (".concat(i, ", ").concat(j, ") element")));
            rowArray.push(input);
        }
        arr.push(rowArray);
    }
    return arr;
}
function display(arr) {
    console.log(arr);
}
var array = getArray();
display(array);
