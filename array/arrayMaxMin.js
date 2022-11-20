function print(...obj){
    console.log(...obj);
}

function max(a){
    var length = a.length;
    var max = a[0];
    for(var i = 1; i < length; i++){
        var temp = a[i];
        if(temp > max){
            max = temp;
        }
    }
    return max;
}

var array = [1, 5, 2, 6, 2, 9, 20, 1000, 50000];
print(max(array));