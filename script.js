// CAMEL CASE USED - first word is smaller and then every first letter of any word is capital

//VARIABLE INSIDE FUNCTION

// function sayHello(){
//     let you = prompt("What is your name?");
//     console.log("hello",you+"!");
// }
// sayHello();


//FUNCTION INSIDE VARIABLE

// let varContainingFunction = function(){
//     let varInFunc = "I'm in a function.";
//     console.log("hi there",varInFunc);
// };
// varContainingFunction();
let a  = prompt("enter no 1");
let b  = prompt("enter no 2");
function addnum(num1,num2){
    console.log(num1+num2);
}
addnum(a,b)