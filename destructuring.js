const user = {
    name: "kal-el",
    add: 'krypto',
    id: 1
}

// if we want to change the variable name of "name" we have to use alias(:) to change the variable name.
let { name: title } = user;

console.log(title);

// for nested object
const employe = {
    naem: 'x',
    age: 22,
    salary: 22000,
    skill: {
        fb: 2,
        // google: 3
    }
}

// we have to assign another object inside the parent object for the nested object and so on.
const { skill: {fb: facebook} } = employe;

// sometimes nested value can't be find so we have to assign a default valu for that object like below:
const { skill: { google } = {} } = employe

console.log("facebook skill: ", facebook);
console.log("Google skill: ", google);