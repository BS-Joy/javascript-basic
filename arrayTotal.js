function print(...obj){
    console.log(...obj);
}

function arrayTotal(a){
    var length = a.length;
    var total = a[0];
    for(var i = 1; i < length; i++){
        var temp = a[i];
        total += temp;
    }
    return total;
}

var array = [1, 5, 2, 2];
print(arrayTotal(array));