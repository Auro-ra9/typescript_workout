function myFilter(myArray, callback) {
    var sum = myArray.reduce(function (acc, num) { return acc + num; }, 0);
    var isEven = callback(sum);
    return sum;
}
function isEven(sum) {
    return sum % 2 === 0;
}
var numbers = [1, 2, 3, 4, 5];
var out = myFilter(numbers, isEven);
console.log(out);
