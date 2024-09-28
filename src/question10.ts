let array1 = [10, 20, 30, 40, 50];
console.log('array 1: ',array1);
let array2 = [15, 25, 35, 45, 55];
console.log('array 2: ',array2);
    [array1, array2] = [array2, array1];
console.log('array 1 after swapping: ',array1);
console.log('array 2 after swapping: ',array2);