import * as readline from "readline-sync";

let number: number = Number(readline.question("Enter a number\t"));

if (number < 2) {
  console.log(number, "is noot a prime number");
}
for (let i: number = 2; i <= number; i++) {
  if (i % number === 0) {
    console.log(number, "is not a prime number");
    break;
  } else {
    console.log(number, "is a prime number");
    break;
  }
}
