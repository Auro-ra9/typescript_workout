var array = [11, 20, 34, 50, 33];
var count = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        count++;
    }
}
console.log(count);
