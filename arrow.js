// normar function
function doubleIt(num){
    let double = num*2;
    let tripple = num*3;
    return double, tripple;
}

// arrow function

let double = num => num*2;

// if there is no parameter then put a empty brace which is mandatory.
let give3 = () => 3;

const result1 = doubleIt(4);
console.log(result1);

const result2 = double(4);
console.log(result2);

const result3 = give3();
console.log(result3);