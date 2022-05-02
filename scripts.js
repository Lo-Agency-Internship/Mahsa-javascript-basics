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

// comparisons

function sumSameNum(a,b){
  if(a===b){
    return 3 * (a + b)
  }
}

// absolute difference

function calDiff(a){
  const num = 19;
  Math.abs(a-num);
  if(a > num){
    return (a - num)*3
  }
}

//  string 
let str = "agency";
function checkstr(str){
  if(str[0]==="L" && str[1]==="o"){
    return str
  }
  return  "Lo" +  str
}
// logical operators

function logicalGateBuffer(a){
  return a
}

function logicalGateNot(a){
  return !a
}


function logicalGateAnd(a,b){
  if(a===true,b===true){
    return true
  }
  return false
}


function logicalGateOr(a,b){
  if (a===false && b===false){
    return false
  }
  return true
}


function logicalGateNand(a,b){
  if(a===true && b===true){
    return false
  }
  return true
}

function logicalGateNor(a,b){
  if (a===false && b === false){
    return true
  }
  return false
}

function logicalGateXor(a,b){
  if(a===b){
    return false
  }
  return true
}

  function logicalGateXnor(a,b){
    if (a===b){
      return true
    }
    return false
  }
  // Loops/factorial

const num = parseInt(prompt("write a positive number"));

function factorialRepetitive(num){
  if (num > 0){
    let result=1;
    for(let i=1;i <= num;i++){
      result = result * i
    }
    return result
  }
  else if (num === 0){
    return 1
  }
  return "you should choose a posivte number"
  
}

console.log(factorialRepetitive(num));



function factorialRecursive(num){
  if (num === 0){
    return 1
  }
  else if (num > 0){
    let result = 1;
    for(let i=1;i<=num;i++){
      result = i * factorialRecursive(i-1)
      
    }
    return result
  
  }
return "you should write a positive number"
}
console.log(factorialRecursive(num));

// Function
// create an array of random number(15,50)
let arr = [];
for(let i=0;i<=5;i++){
  randNum = rand(15,50);
  arr.push(randNum)
}
//create custom Map function
function customMap(arr,f){
  let result = [];
  for(let i=0;i<arr.length;i++){
    let num = f(arr[i]);
    result.push(num)
  }
  return result
}

console.log(arr);
let result = customMap(arr,a=> a * 2)
console.log(result);

//create a custom filter function
function customFilter(arr,f){
  let result = [];
  for(let i=0;i<arr.length;i++){
    numFiltered = f(arr[i]);
    if (numFiltered){
      result.push(arr[i])
    }
    
  }
  
  return result
}
console.log(arr);
let result = customFilter(arr,a => (a % 2) === 0);
console.log(result);

//create a custom reduce function
function customReduce(arr,f){
  let accumulator = 0;
  for(let i=0;i<arr.length;i++){
    accumulator = f(arr[i],accumulator)
    
  }
  
  return accumulator
}
let result = customReduce(arr,(a ,b)=> a + b)
console.log(result);