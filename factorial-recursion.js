function print(obj) {
    console.log(obj);
}

function factorial__of(num){
    var factorial;
    if(num == 0){
        return factorial = 1;
    }
    else {
        return factorial__of(num - 1) * num;
    }
}

print(factorial__of(80));