import * as readline from 'readline-sync';

let principle_amount:number= Number(readline.question('Enter the principle amount'));
let interest_rate:number= Number(readline.question('Enter the interest rate'));
let years:number= Number(readline.question('Enter the number of years'));

let si= (principle_amount*interest_rate*years)/100
console.log(si)