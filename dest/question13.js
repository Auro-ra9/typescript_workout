"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var word = readline.question("Enter the word: ");
function isPalindrome(word) {
    var w = word.split("");
    for (var i = 0; i < Math.floor(w.length / 2); i++) {
        if (w[i] !== w[w.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
if (isPalindrome(word)) {
    console.log("".concat(word, " is a palindrome"));
}
else {
    console.log("".concat(word, " is not a palindrome"));
}
