const fs = require("fs");
// const text = fs.readFileSync('E:\\NITESH\\Study\\Web Development\\JavaScript\\read.txt', "utf-8");
let text = fs.readFileSync('E:\\NITESH\\Study\\Web Development\\JavaScript\\read.txt', "utf-8");
text = text.replace("content", "data");

console.log("The content of the page is:")
console.log(text);

fs.writeFileSync('E:\\NITESH\\Study\\Web Development\\JavaScript\\data.txt', text)