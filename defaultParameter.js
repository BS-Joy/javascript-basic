// here 0 is default value for num2 if there is no num2 while calling add function
function add(num1, num2=0){
    console.log(num1 + num2);
}

add(1, 2);

// here we didn't pass the 2nd parameter so num2 value will be 0 and the result will be 5+0 = 5
add(5);