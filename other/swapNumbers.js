function print(...obj){
    console.log(...obj);
}

// function swap(m, n){
//     var temp;
//     temp = m;
//     m = n;
//     n = temp;
//     print(m, n);
// }

// or

function swap(m, n){
    m = m+n;
    n = m - n;
    m = m - n;
    print(m, n);
}
var x = 4;
var y = 6;
[x, y] = [y, x];
print(x, y);
swap(3, 2);
var a = parseInt(Math.random()*10);
print(a);