export {};

let array = [20, 10, 50, 30, 40];
let sortedArray = array.sort((a, b) => {
  return b - a;
});

console.log(sortedArray);
