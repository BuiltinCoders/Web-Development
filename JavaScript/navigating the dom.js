let main = document.getElementById("main");
// console.log(main);

let navMenu = document.getElementById("navigation-menu");
// console.log(navMenu);


// get element of html by class name
let container = document.getElementsByClassName("container");
// console.log(container);


// query selector - select the first occuring id, class or element name
let selector = document.querySelector('#navigation-menu>li');
// console.log(selector);

let selectorAll = document.querySelectorAll("#navigation-menu>li");
// console.log(selectorAll);

for (i=0; i<selectorAll.length; i++){
    selectorAll[i].innerHTML = 'loop';
}

