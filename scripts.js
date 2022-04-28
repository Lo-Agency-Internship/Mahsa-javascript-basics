let officialName = prompt("What is official name of javascripts?");
alert(officialName);

// variables

let fullName = prompt("write down your name? ");
let age = prompt("write down your age? ");
let sex = prompt("write down your sex? ");
alert(fullName + " "+ age + " " + sex);


let workDay = prompt("How many days of the week do you work?");
let offDay = prompt("How many days of the week are you off? ");
alert("workDay : "+ workDay + " offDay : " + offDay);


let saveValue = workDay;
workDay = offDay;
offDay = saveValue;
alert("workDay: " + workDay + " offDay: " + offDay);
