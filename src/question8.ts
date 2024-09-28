import * as readline from "readline-sync";

let limit: number = Number(readline.question("Enter a limit\t"));
let sum: number = 0;
for (let i: number = 1; i <= limit; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log('Sum of odd numbers: ',sum);
