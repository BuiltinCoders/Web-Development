// Synchronous or Blocking
// run code line by line

// Asynchronous or Non-blocking
// run code line by line is not guaranteed means if a function requires time to evalute result then the code will
// pass that function and jump to another funtion and when the left funtion is ready to execute then it will execute

const fs = require("fs");
const text = fs.readFile('E:\\NITESH\\Study\\Web Development\\JavaScript\\nodejs-data.txt', 'utf-8', (err, data)=>{
    console.log(data);
});
console.log("This is second message") // This will execute first as asynchronys callback function take time to evalute the result