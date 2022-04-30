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

// data-type

let firstName = prompt("write down your first name: ");
let lastName = prompt("write down your last name: ");
let personAge = prompt("write down your age: ");
let gender = prompt("write down your gender: ");

alert(`first name: ${firstName} , last name: ${lastName} , age: ${personAge} , gender:${gender}`);

// show info on the page

let message = `first name: ${firstName} , last name: ${lastName} , age: ${personAge} , gender:${gender}`;
alert(message);
document.getElementById("bonus").innerHTML = message;

// Basic operator math
// 4 math
function rand (a,b){
    return Math.floor(Math.random()* (b-a) + a)
  }

let a = rand(5,8);
console.log(a);


  //binary to decimal

function bin2dec(a){
      return parseInt(a,2)
  }

let num = bin2dec(101010);
console.log(bin2dec(num));


