let arr1 = [2, 4, 3, 5, 6];
let arr2 = [2, 4, 3, 5, 6];
let arr3 = [2, 4, 3, 5, 6];

// way 1 using concat function()
let fullArr1 = arr1.concat(arr2).concat(arr3).concat([12, 78]);
console.log(fullArr1);

// way 2 using (...) 3 dot
let fullArr2 = [...arr1, ...arr2, ...arr3, 44];
console.log(fullArr2);

// max value from an array using predefine function
let money = [24, 23, 45, 36];

// here if we don't use three dot the function won't work because it expect some number but it's getting an array. so when we use three dot it gets the value of the arrays which are numbers.
const maximum = Math.max(...money);
console.log(maximum);