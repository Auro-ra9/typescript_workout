function checkHeight(my_height) {
    if (typeof my_height !== 'number' || isNaN(my_height)) {
        throw new Error("notANumberError");
    }
    else if (my_height > 50) {
        throw new Error("hugeHeightError");
    }
    else if (my_height < 1) {
        throw new Error("tinyHeightError");
    }
    else {
        console.log(my_height);
    }
}
try {
    checkHeight("seven");
}
catch (error) {
    console.log(error.message);
}
try {
    checkHeight(77);
}
catch (error) {
    console.log(error.message);
}
try {
    checkHeight(0);
}
catch (error) {
    console.log(error.message);
}
try {
    checkHeight(8);
}
catch (error) {
    console.log(error.message);
}
