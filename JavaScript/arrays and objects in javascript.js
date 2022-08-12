// data types in javascript
// 1. string
let myvar = 'nitesh';

// 2. integer
let myvar2 = 23

// 3. boolean
let myvar3 = true;

// 4. special variables
let myvar4 = null;
let myvar5 = undefined;

// console.log(myvar);
// console.log(myvar2);
// console.log(myvar3);
// console.log(myvar4);
// console.log(myvar5);


// Objects
// let employee = {
//     name: 'Nitesh',
//     class: 10,
//     'roll no': 234,
//     passion: 'coding',
// }

// console.log(employee);
// // two ways to extract object data
// console.log(employee.name);
// console.log(employee['roll no']);


// Arrays
// let names = [1, 3, 4, "Nitesh", false, undefined, null];

// another way to creat array
let names = new Array(1, 5, 3, "Nitesh", false, undefined, null);

// sort method actually sort the array
names.sort();
// push method apend new data to the existing array
names.push('new value');
console.log(names);

// console.log(names[2]);
// console.log(names[6]);

// to create an empty array with spaces reserved for data for example below the array consist of empty spaces for 23 elements.
let salaries = new Array(23);
console.log(salaries);