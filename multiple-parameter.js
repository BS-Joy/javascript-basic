// what is someone pass three argument to your to numbers add function
// on that situation 'arguments' keywords is the doctor. Let's see:

function add(n1, n2){
    const temp = [...arguments];
    let total = temp[0]
    for(let i = 1; i < temp.length; i++){
        total += temp[i];
    }
    return total;
}

const totalNum = add(3, 2, 5);
console.log(totalNum);