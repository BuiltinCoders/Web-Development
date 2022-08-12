// Strings in Javascript
// how to define a string in javascript

var string = "that's "
var fname = 'Nitesh'
var lname = "Kumar"
var course = "web development"

// string concatenation
// console.log(string + fname + lname);

// how to use variables in strings without concentenation
var message = `${fname} is currently doing a ${course} course.`
console.log(message)

// string methods
// length method - to find the length of the string
var len = fname.length
console.log(`Length of name is ${len}`)

// escape sequence in javascript
console.log('My name is \n Nitesh Kumar and \t and \b')
console.log('My name is \\n Nitesh Kumar and \t and \b')

// string constructor
var y = new String("this");
console.log(y);

// document.getElementById('content').innerHTML='<p> this a paragraph </p>';
document.getElementById('content').innerHTML = '<h3>this is a h3 heading</h3>'