// templete makes string addition easy for us
// old way

let a= 'hello';
let b = 'there';
let c = a+" "+b
console.log(c);

// template way `{}`=carret

let d = `${a} ${b}`;
console.log(d);

// normally we can't print multiline inside a variable
let p = 'How'
    +' you'
    +' doin?'
// it will print 'How you doin?' in a single line
console.log(p);

// but using template we can do it easily
let q = `How
you
doin?`
console.log(q)