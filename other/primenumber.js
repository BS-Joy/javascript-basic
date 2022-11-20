function print(obj){
    console.log(obj);
}

function isPrime(n){
    if(n > 1){
        for(var i=2; i<n; i++){
            if(n%i == 0){
                print(n + ' is not a prime number.');
                break;
            }
            else{
                print(n + ' is a prime number.')
            }
        }
    }
    else {
        print('Please enter a number greater than 1. Because 1 is not a prime number.');
    }
}

isPrime(3);
var a = Math.random();
print(a);