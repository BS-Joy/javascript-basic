function print(obj) {
    console.log(obj);
}

function factorialof(num) {
    var factorial = 1;

    if (num == 0) {
        print(factorial);
    }
    else {
        var i = num
        while (i > 0) {
            factorial *= i;
            i--;
        }
        print(factorial);
    }
}

// or

function factorial_of(num){
    var factorial = 1;

    if (num == 0) {
        print(factorial);
    }
    else {
        var i = 1
        while (i <= num) {
            factorial *= i;
            i++;
        }
        print(factorial);
    }
}

factorial_of(4);
factorialof(4);
