function print(obj) {
    console.log(obj);
}

function newLine() {
    print("\n");
}

let ages = [4, 10, 20, 13];

print("Length of the array: " +ages.length);
print(ages);
newLine();

// add some/a value to the array at any index
ages.splice(0, 0, 20, 33, 27);
print('After adding 3 valu at index 0')
print("Length of the array: " +ages.length);
print(ages);
newLine();

print("After pushing 2 value");
ages.push(34, 35);
print(ages);
newLine();

print('After popping 1 value');
ages.pop();
print(ages);
newLine();

// delete a certain element from the arry by using splice() function. let say 4
print('after removing 4 from the array');
let index3 = ages.indexOf(4);
ages.splice(index3, 1);
print(ages);
newLine();


// delete will delete the valu but not the memory
print('after deleting 10 from the array but not its memory');
let index = ages.indexOf(10);

delete ages[index];
print(ages);