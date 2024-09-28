import * as readline from "readline-sync";

let word = readline.question("Enter the word: ");

function isPalindrome(word: string): boolean {
  let w: string[] = word.split("");

  for (let i = 0; i < Math.floor(w.length / 2); i++) {
    if (w[i] !== w[w.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

if (isPalindrome(word)) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}
