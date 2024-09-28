"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.circle = function (radius) {
        var area = 3.14 * radius * radius;
        return area;
    };
    Area.prototype.square = function (side) {
        var area = side * side;
        return area;
    };
    Area.prototype.rectangle = function (length, breath) {
        var area = length * breath;
        return area;
    };
    Area.prototype.triangle = function (base, height) {
        var area = 0.5 * base * height;
        return area;
    };
    return Area;
}());
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyClass.prototype.main = function () {
        var choice = Number(readline.question("Enter your choice :"));
        switch (choice) {
            case 1:
                var radius = Number(readline.question("Enter the radius of the circle :"));
                console.log("Area of circle with radius ".concat(radius, " is ").concat(this.circle(radius)));
                break;
            case 2:
                var side = Number(readline.question("Enter the side of the square :"));
                console.log("Area of square with side ".concat(side, " is ").concat(this.square(side)));
                break;
            case 3:
                var length_1 = Number(readline.question("Enter the length of the rectangle :"));
                var breadth = Number(readline.question("Enter the breadth of the rectangle :"));
                console.log("Area of rectangle with length ".concat(length_1, " and breadth ").concat(breadth, " is ").concat(this.rectangle(length_1, breadth)));
                break;
            case 4:
                var base = Number(readline.question("Enter the base of the triangle :"));
                var height = Number(readline.question("Enter the height of the triangle :"));
                console.log("Area of triangle with base ".concat(base, " and height ").concat(height, " is ").concat(this.triangle(base, height)));
                break;
            default: console.log("Invalid choice");
        }
    };
    return MyClass;
}(Area));
var obj = new MyClass();
obj.main();
