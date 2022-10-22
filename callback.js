function welcome(name, greet){
    greet(name);
}

function morning(name){
    console.log('Good Moring', name);
}

function noon(name){
    console.log('Good noon', name);
}

function evening(name){
    console.log('Good evening', name);
}

const person = 'Tony';
welcome(person, morning);
welcome(person, noon);
welcome(person, evening);
welcome('Emma Watson', morning);