const student = [
    {id: 2, name:'abul'},
    {id: 3, name:'bbul'},
    {id: 4, name:'cira'},
];

const nameOfStudent = student.map(function(element){
    const varName = element.name;
    return varName;
})

// or

const names = student.map(s => s.name);
const ids = student.map(s => s.id);

console.log('ID\'s: ', ids)
console.log('Names: ', names);
