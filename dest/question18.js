"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var writtenTest = Number(readline.question("Enter the mark scored in written exam :"));
var labExam = Number(readline.question("Enter the mark scored in lab exam :"));
var assignment = Number(readline.question("Enter the mark scored for assignments :"));
function findTotalScore(writtenTest, labExam, assignment) {
    var result = ((writtenTest * 70) / 100) + ((labExam * 20) / 100) + ((assignment * 10) / 100);
    return result;
}
console.log(findTotalScore(writtenTest, labExam, assignment));
