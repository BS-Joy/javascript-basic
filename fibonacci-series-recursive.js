function print(obj){
    console.log(obj);
}

function fiboOf(num){
    var fibo = [0, 1];
    if(num == 0){
        return false;
    }
    else if(num == 1){
        return [0];
    }
    

    if(num == 2){
        return [0, 1];
    }
    else {
        var next = fiboOf(num - 1) + fiboOf(num - 2);
        fibo.push(next);
        return fibo;
    }
    
}

print(fiboOf(5))