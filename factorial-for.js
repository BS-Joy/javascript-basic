function print(obj) {
    console.log(obj);
}

function factorialOf(num) {
    var factorial = 1;

    if (num == 0 || num == 1) {
        print(factorial);
    }
    else {
        for (var i = num; i > 1; i--) {
            factorial *= i;
        }
        print(factorial)
    }
}

// or
function factorial_of(num){
    var fact = 1;

    if(num == 0) {
        print(fact);
    }
    else {
        for(var i = 1; i<= num; i++){
            fact *= i;
        }
        print(fact);
    }
}

factorialOf(4);
factorial_of(80);
