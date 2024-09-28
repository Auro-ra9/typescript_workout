var row = 3;
var column = 3;
var arr1 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
var arr2 = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];
var result = new Array(row).fill(0).map(function () { return new Array(column).fill(0); });
for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
        result[i][j] = arr1[i][j] + arr2[i][j];
    }
}
console.log(result);
