let array = [11, 20, 34, 50, 33];
let count: number = 0;
for (let i: number = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    count++;
  }
}

console.log(count)