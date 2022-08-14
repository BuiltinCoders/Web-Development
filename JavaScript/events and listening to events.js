
// function toggleHide(){
    
//     if (para.style.backgroundColor == "rgb(255, 123, 15)"){
    //         para.style.backgroundColor = "white";
//         para.style.color = "orange";
//     }
//     else{
//         para.style.backgroundColor = "rgb(255, 123, 15)";
//         para.style.color = "white";
//     }
// }

let para = document.getElementById('para');
let button = document.getElementById("btn");
// button.addEventListener("click", function run(){
//     para.style.backgroundColor = "orangered";
// })

// para.addEventListener("mouseover", function mouseover(){
//     // alert("Your mouse is inside");
//     console.log("Your mouse is inside")
// })

// para.addEventListener("mouseout", function mouseOut(){
//     // alert("Your mouse is outside");
//     console.log("Your mouse is outside")
// })


// para.addEventListener("mousedown", function mouseDown(){
//     console.log("Your mouse is Pressed")
// })
// para.addEventListener("mouseup", function mouseUp(){
//     console.log("Your mouse is not pressed")
// })


// para.addEventListener("mousemove", function mouseMove(){
//     console.log("Your mouse moved")
// })

button.addEventListener("click", function pass(){
    confirm("Do you really want submit this application");
    button.innerHTML = "Your application is sent";
    button.style.color = "rgb(0, 132, 255)";
    button.style.backgroundColor = 'black';
    console.log("Your application is passed");
})