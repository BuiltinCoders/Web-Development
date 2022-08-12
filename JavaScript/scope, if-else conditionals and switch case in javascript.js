string1 = 'this is a string';
string1 = 'this is string 2';
// console.log(string1)

// To avoid declaration of a variable more than once then use let variable instead of normal variable
let name = 'Nitesh';
// let name = "Nirwan"  --- shows an error as name variable is already declared; 
// console.log(name);

// variable can be of two types - global variable and local variable
// global variable can used all across the code but local variable can only be used in a specific block
{
    // Here name is a local variable which has existance outside this block
    let name = "Nirwan";
    console.log(name);
}

console.log(name);

// const variable - this variable cannot be changed
const message = 'this is a constant message';
// message = 'this a new message'  --------------- will show error
console.log(message);

// a variable can diclared with var, let and const

// if-else in javascript
let age = 18;
if(age>18){
    console.log('You are more than 18');
}
else if(age==18){
    console.log('You are 18')
}
else{
    console.log('You are smaller than 18');
}

// switch case
const day = 'Sunday'
switch (day){
    case 'Monday': 
        console.log('Today is monday')
        break;

    case 'Tuesday':
        console.log('Today is tuesday')
        break;
    case 'Wednesday':
        console.log('Today is wednesday')
        break;
    
    default:
        console.log('Today is not Monday, Tuesday or Wednesday')
        break;
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}