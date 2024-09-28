let pattern: string = "";
for (let i: number = 0; i <= 5; i++) {
  for (let j: number = 1; j <= i; j++) {
    pattern += j + " ";
  }
  pattern += "\n";
}
console.log(pattern);
