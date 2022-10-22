function print(obj) {
    console.log(obj);
}
function fiboSeriesOf(num) {
    var fibo = [0, 1];
    if (num == 1) {
        fibo.pop();
        print(fibo);
    }
    else {
        for (var i = 2; i < num; i++) {
            var next = fibo[i - 1] + fibo[i - 2];
            fibo.push(next);
        }
        print(fibo);
    }
}

fiboSeriesOf(3);