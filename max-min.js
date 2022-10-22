function print(...obj){
    console.log(...obj);
}

function max(m, n){
    var max = m;
    if(n > max){
        print(n);
    }
    else if(max == n){
        print('Numbers are equal');
    }
    else{
        print(max);
    }
}

function min(m, n){
    var min = m;
    if(n < min){
        print(n);
    }
    else if(min == n){
        print('Numbers are equal');
    }
    else{
        print(min);
    }
}

max(5, 9);
min(9, 5);