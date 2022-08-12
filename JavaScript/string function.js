var str = 'This is a string'
console.log(str);

// 1. indexOf - used to find the first occurence of the substring
var position = str.indexOf('is');
console.log(position);

// 2. lastIndexOf - used to find the last occurence of the substring
position = str.lastIndexOf('is');
console.log(position);

// 3. slice, substring and substr  - used to extract substring from a string
// var subsrn = str.slice(1,6);
var subsrn = str.slice(-6, -1);
console.log(subsrn);

subsrn = str.substring(1, 6);
console.log(subsrn);

subsrn = str.substr(1, 8);
console.log(subsrn);

// 4. replaced - used to replace some character of a string with another string but it does not cahnge the original string it create another replaced string;
var replaced = str.replace('string', 'new string');
console.log(str);
console.log(replaced);

// 5. toUpperCase and toLowerCase - used to change the text change of the string
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 6. concat - used to concetinate string
console.log(str.concat(' new string'));


// 7. trim - trim function is used to delete white spaces from a string
var strwithwhitespaces = '   This is string  with   whitespaces   ';
console.log(strwithwhitespaces);
console.log(strwithwhitespaces.trim());

// 8. charAt - used to display character through it index number
console.log(str.charAt(14));

// 9. charCodeAt - used to display character code of the character of the index number
console.log(str.charCodeAt(14))

// another way to extract character from a string through it's index number
console.log(str[8]);