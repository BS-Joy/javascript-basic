function print(obj){
    console.log(obj);
}

function fiboOf(num){
    if(num == 0){
        return false;
    }
    else if(num == 1){
        return 0;
    }
    

    if(num == 2){
        return 1;
    }
    else {
        return fiboOf(num-1) + fiboOf(num - 2);
    }
    
}

print(fiboOf(5))