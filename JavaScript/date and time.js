// let ndt = new Date();

// let ndt = new Date(2000);

// let ndt = new Date("2022-12-1");

// let ndt = new Date(year, month, date, hour, minute, second, milliseconds);
// let ndt = new Date(3078, 11, 1, 12, 12, 12)
// console.log(ndt);

let ndt = new Date();
let yr = ndt.getFullYear();
console.log(yr);

let mnt = ndt.getMonth();
console.log(mnt);
let dt = ndt.getDate();
console.log(dt);
let tt = ndt.getHours();
console.log(tt);
let min = ndt.getMinutes();
console.log(min);
let sec = ndt.getSeconds();
console.log(sec);

ndt.setFullYear(3078);
ndt.setMonth(11);
ndt.setDate(1);
console.log(ndt);

function updateTime(){
    time = new Date();
    time.setFullYear(3078)
    document.getElementById("time").innerHTML = time;
}

setInterval(updateTime, 1000);
