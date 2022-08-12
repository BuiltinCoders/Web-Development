// to make website interactive we use messages that connect users with the website
// to do so
// we use alert - to alert user, promt - to take input from user and confirm - to double check the user action

// Alert
// alertValue = alert('This is a alert message');
// console.log(alertValue);
// return nothing



// prompt
// here Guest is default value
// let userName = prompt("Enter your name", 'Guest');
// console.log(userName);



// confirm
// let delValue = confirm("Do you really want to delete this?")
// console.log(delValue);
// if (delValue){
//     console.log('Your deletion process is successful')
// }
// else{
//     console.log('Your deletion process failed')
// }


// exercise for practice
ageValue = prompt("What is your age", "");
if (ageValue>=18){
    console.log('You can access this content')
}
else{
    console.log("You cannot access this content")
}