function print(obj) {
    console.log(obj);
}

var year = 1700;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if(year % 400 == 0) {
            print('Year ' + year + " is a leap year.");
        }
        else {
            print('Year ' + year + " is not a leap year.");
        }
    }
    else {
        print('Year ' + year + " is a leap year.");
    }
}
else {
    print('Year ' + year + " is not a leap year.");
}