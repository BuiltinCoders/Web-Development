// JSON is used to convert an object into string so it can be stored or transported
let jsonObj = {
    name: "Nitesh",
    class: 10,
    roll: 123,
    subject: "science",
}

// console.log(jsonObj);
let str_json = JSON.stringify(jsonObj);
str_json = str_json.replace("Nitesh", "Rohan");
console.log(str_json);

// parseing the string - converting a valid string object to object
let new_json = JSON.parse(str_json);
console.log(new_json);

