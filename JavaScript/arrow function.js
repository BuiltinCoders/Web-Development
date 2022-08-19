// how to define a function normally
function greet(){
    console.log("Good Morning");
}

// how to define a function using arrow method
let bleshing = ()=>{
    console.log("May God blesh you")
}

setTimeout(()=>{
    console.log("May God Blesh you");
}, 2000)

// how to define a function using arrow method without "{}" or function returing something or doing single task
let sum2 = (a,b)=>a+b;
let div = (a)=>a/2;

let greetSir = ()=>console.log("Hello Sir")
greetSir();

let obj = {
    greetN: "Good Night ",
    names: ["Nitesh", "Rohan", "Jio", "Airtel"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greetN + `Hello ${student}`);
        });
    }
}

obj.speak()