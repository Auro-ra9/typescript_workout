import * as readline from 'readline-sync';

let question:number= Number(readline.question('enter first number\t'));
let question2:number= Number(readline.question('Enter second number\t'));
let sum:number= question+question2;
console.log(sum)
