let name = "Nitesh";
let name1 = "Rohan";
let name2 = "Jonson";

// instead of running the same code when can define a funtion which can do the same job and increase the productivity of code;

// console.log(name + ' ' + 'is a good boy');
// console.log(name1 + ' ' + 'is a good boy');
// console.log(name2+ ' ' + 'is a good boy');

// to create a function
function Greet(name, GreetText = "Greeting from javascript") {
  console.log(GreetText + " " + name);
  console.log(name + " " + "is a good boy");
}

GreetText = "Good Morning";
Greet(name, GreetText);
Greet(name1, GreetText);

// default argument - in case when the value of argument is not given then the default value will be estimated.
Greet(name2);


// returnable function
function Sum(a, b, c){
    let d = a+b+c;
    return d;
}

let returnValue = Sum(1, 7, 3);
console.log(returnValue);


// Exercise to find smaller value between two numbers
function Smaller(num1, num2){
    if (num1<num2){
        return num1;
    }
    else{
        return num2;
    }
}

num1 = 7;
let num2 = 10;
console.log(`smaller number between ${num1} and ${num2} is ${Smaller(num1, num2)}`)