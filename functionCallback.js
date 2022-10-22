function check(name, age, task){
    console.log(name);
    console.log(age);
    if (task){
        task();
    }
    else{
        return null;
    }
}

function smoke(){
    console.log('can smoke');
}

function cantSmoke(){
    console.log("can't smoke");
}

check('x', 18, smoke);
check('y', 16, cantSmoke);
check('asdf', 4);

