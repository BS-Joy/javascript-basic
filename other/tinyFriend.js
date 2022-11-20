function print(...obj){
    console.log(...obj);
}

function tinyFriend(a){
    var small = a[0];
    for(var i = 1; i < a.length; i++){
        var temp = a[i];
        if(temp.length < small.length){
            small = temp;
        }
    }
    return small;
}

var frName = ['Chandler', 'Monika', 'Joey', 'Rachel'];
print(tinyFriend(frName));