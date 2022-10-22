function print(...obj) {
    console.log(...obj);
}

function removeDupli(a) {
    var length = a.length;
    
    for (var i = 0; i < length-1; i++) {
        var dupli = a[i];
        for (var j = i + 1; j < length; j++) {
            var temp = a[j];
            if (dupli == temp) {
                dupli = temp;
                a.splice(j, 1);
            }
        }
    }
    return a;
}

// remove dupli using another array

function dupliRemove(a){
    var newArray = [];
    for(var i = 0; i < a.length; i++){
        var temp = a[i];
        if(newArray.indexOf(temp) == -1){
            newArray.push(temp);
        }
    }
    return newArray;
}

var array = [1, 5, 2, 2, 5, 8, 9, 0, 3, 5];
print(removeDupli(array), '\n');
print('With another array')
print(dupliRemove(array));