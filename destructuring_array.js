var number = [2, 53, 234, 3, 1, 9];

// it will assign the first two valu to the given variable
// var [a, b] = number;
// console.log(a, b);

// if we want to assign 53 to a & 3 to b the we have skip the frontal variables. Ex:
// var [, a, , b] = number;
// console.log(a, b);

// now for nested array

var numbers = [1, 2, 5, [3, 9, 6], 7];

// now to access 9 & 6 to a & b we have to nested the array like object destructuring
var [ ,,,[,a,b] ] = numbers;
console.log(a, b);