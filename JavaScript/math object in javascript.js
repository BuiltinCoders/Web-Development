// to find all math functions
console.log(Math);

console.log("The value of E is", Math.E);
console.log("The value of LN2 is", Math.LN2);
console.log("The value of LN10 is", Math.LN10);
console.log("The value of LOG2E is", Math.LOG2E);
console.log("The value of LOG10E is", Math.LOG10E);
console.log("The value of PI is", Math.PI);
console.log("The value of SQRT1_2 is", Math.SQRT1_2);
console.log("The value of SQRT2 is", Math.SQRT2);

// print the functions from math object
let a = 32.98;
let b = 5;

// round function
console.log("The value of a and b is", a, b);
console.log("The rounded value of a and b is", Math.round(a), Math.round(b));

// pow function - power function
console.log("5 raised to the power of 3 is", Math.pow(5, 3));
console.log("2 raised to the power of 3 is", Math.pow(2, 3));
console.log("1 raised to the power of 4 is", Math.pow(1, 4));

// sqrt function - square root function
console.log("square root of 4 is", Math.sqrt(4));
console.log("square root of 64 is", Math.sqrt(64));
console.log("square root of 5 is", Math.sqrt(5));

// cell funcion - round up the given value
console.log("the round up value of 5.8 is", Math.ceil(5.8));

// floor function - round down the given value
console.log("the round down value of 5.8 is", Math.floor(5.8));

// abs function - return the absolute value(converts negetive value to positive)
console.log("The absolute value of 5.7 is", Math.abs(5.7));
console.log("The absolute value of -5.7 is", Math.abs(-5.7));

// sin function
console.log("the sin value of sin(PI) is", Math.sin(Math.PI));
console.log("the sin value of tan(PI) is", Math.tan(Math.PI));
console.log("the sin value of cos(PI) is", Math.cos(Math.PI));

// how to generate a random function
// generate number 0 and 1
console.log("Random value is", Math.random())

// to generate a number between linke 1 and 100
let x = 1;
let y = 200;

let ran1_100 = x+(y-x)*Math.random();
console.log("random value between 1 and 100 is", ran1_100);