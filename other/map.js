const num = [2, 5, 1, 6, 9, 23, 45, 22];
const resultArray = [];
// find square of every numbers from the array in old way

for(let i = 0; i < num.length; i++){
    let element = num[i];
    let result = Math.pow(element, 2);
    resultArray.push(result);
}

// console.log(resultArray)

// map way

const squareof = num.map(function(element){
    return element * element;
});

// console.log(squareof);

// another way using map and arrow function

const square = num.map(x => x * x);
console.log(square);