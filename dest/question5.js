"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var mark = Number(readline.question("enter your score"));
switch (true) {
    case (mark > 90):
        {
            console.log("Grade: A");
        }
        break;
    case (mark >= 80 && mark <= 89):
        {
            console.log("Grade: B");
        }
        break;
    case (mark >= 70 && mark <= 79):
        {
            console.log("Grade: C");
        }
        break;
    case (mark >= 60 && mark <= 69):
        {
            console.log("Grade: D");
        }
        break;
    case (mark >= 50 && mark <= 59):
        {
            console.log("Grade: E");
        }
        break;
    case (mark >= 50):
        {
            console.log("Failed");
        }
        break;
}
