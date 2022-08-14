// setTimeOut = allows us to run a function once after the completion of the time interval.
// clearTimeout = allows us to deactivate setTimeout
// setInterval = allows us to run a function repeatitively after the completion of the time interval.
// clearInterval = allows us to deactivate setInterval

function greet(name, endText){
    console.log("Hello goood morning " + name + " " + endText);
}

// timeOut = setTimeout(greet, 3000, "Nitesh", "Take care");
// console.log(timeOut);
// clearTimeout(timeOut);

// interValid = setInterval(greet, 1000);
// clearInterval(interValid);

function time(){
    time = new Date();
    console.log(time);
    document.getElementById("time").innerHTML = time;
}

setInterval(time, 1000);

