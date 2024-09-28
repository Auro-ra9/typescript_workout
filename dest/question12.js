"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array = [20, 10, 50, 30, 40];
var sortedArray = array.sort(function (a, b) {
    return b - a;
});
console.log(sortedArray);
