"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pattern = "";
for (var i = 0; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        pattern += j + " ";
    }
    pattern += "\n";
}
console.log(pattern);
