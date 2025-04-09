// CAMEL CASE USED - first word is smaller and then first letter of every word is capital

//VARIABLE INSIDE FUNCTION

// function sayHello(){
//     let you = prompt("What is your name?");  //prompt is used to take input in browser (string format)
//     console.log("hello", you+"!");
// }
// sayHello();


//FUNCTION INSIDE VARIABLE

// let varContainingFunction = function(){
//     let varInFunc = "I'm in a function.";
//     console.log("hi there",varInFunc);
// };
// varContainingFunction();

//PRACTICE EXAMPLES

// Ques 1 add two numbers
// let a  = parseInt(prompt("enter no 1")); //parseint used for typecasting
// let b  = parseInt(prompt("enter no 2"));
// function addnum(num1,num2){
//     console.log(num1+num2);
// }
// addnum(a,b)

//Ques 2 concatenate two strings
// function tester(para1,para2){
//     return para1 + " " + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// console.log(tester(arg1,arg2));

// function addTwoNumbers(x=2,y=3){ // default arguments representation 
//     console.log(x+y);
// }
// addTwoNumbers(); // default values taken
// addTwoNumbers(10); // x replaced by 10 
// addTwoNumbers(10,5); // x and y replaced by 10 and 5 
// addTwoNumbers(2,3,4,5); //first two are considered 



// // ARROW FUNCTONS - are used for sending functions around as a parameters and using shortcut notation.



// 1. (p1,p2) => console.log(p1+p2); //body of the function

// 2. () => console.log("hello"); //for printing anything when no parameter is needed

// 3. p => console.log(p); //for single parameter 

// 4. (p1,p2) => {
//     //for multiple statements
// };

// //example 
// function doingStuff(x){
//     console.log(x);
// }

// let doingArrowStuff = x => console.log(x); //used preferably 


// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));



//SPREAD OPERATOR


// let spread = ["so", "much", "fun"];
// let message = ["JavaScript","is", ...spread, "and", "very" , "powerful"];
// let message1 = ["Science","is", ...spread, "and", "very" , "practical"];
// console.log(message);
// console.log(message1);
// console.log(...message);
// console.log(...message1);


// // addition using spread operator -  spread opr can be used as an argument in a function
// function add2(x,y,z,m){
//     console.log(x+y+z+m)
// }
// let arr =[2,5,7,9];
// add2(...arr);



//REST PARAMETER


// function someFunction(p1,p2){
//     console.log(p1,p2);
// }
// someFunction("hi","there!","how are you?"); //it prints only first two parameter ie. -> hi there!


// function someFunction(p1,...p2){ //here rest parameter is used
//     console.log(p1,p2);
// }
// someFunction("hi","there!","how", "are", "you?"); // it 


//difference  btw UNDEFINED And NULL
// UNDEFINED = Uninitialised
// NUll = Empty

// let addTwoNumbers = (x,y) => console.log(x+y); //arrow prints value
// let resultArr = []
// for(let i=0 ; i<10 ; i++){
//     let result = addTwoNumbers(i,i*2);
//     resultArr.push(result);
// }
// console.log(resultArr);

// let addTwoNumbers = (x,y) => x+y; //arrow returns only values
// let resultArr = []
// for(let i=0 ; i<10 ; i++){
//     let result = addTwoNumbers(i,i*2);
//     resultArr.push(result);
// }
// console.log(resultArr);



//VARIABLE SCOPE AND FUNCTIONS

// function testAvailablity(x){`//when parameter is given
//     console.log("Available here:", x);
// }
// testAvailablity("HII");
// console.log("Not Available here:", x);



// function testAvailablity(){     // when parameter is not given instead let y variable is used for inp value
//     let y = "Local Variable";
//     console.log("Available here:", y);
// }
// testAvailablity();
// console.log("Not Available here:", y);


// function testAvailablity(){     // when parameter is not given instead let y variable is used for inp value
//     let y = "i'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z = testAvailablity();
// console.log("Outside the function:",z);
// console.log("Not Available here:", y);


//  LET VERSUS VAR VARIABLES

// function doingStuff(){
//     if(true){
//         var x ="local"; //if we use let x it will give refrence error bcz let is block-scoped and var is function-scoped
//     }
//     console.log(x);
// }
// doingStuff(); //op: local


// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x = "local";     // if using let x it will give refrence error : cannot access 'x'
//     }
// }
// doingStuff(); // op: undefined(bcz var is uninitialised)


// let globalVar = "Accessible everywhere!";
// console.log("Outside Function:", globalVar);

// function creatingNewScioe(x){
//     console.log("Acess to global vars inside function",globalVar);
// }
// creatingNewScioe("some parameter");
// console.log("Still available:",globalVar); //op: Outside Function: Accessible everywhere!
//                                              //  Acess to global vars inside function Accessible everywhere!
//                                              //  Still available: Accessible everywhere!



// let x="global";
// function doingStuff(){
//     let x= "local";
//     console.log(x);
// }
// doingStuff(); 
// console.log(x); // op: local global


// let x="global";
// function doingStuff(){
//     x= "local";
//     console.log(x);
// }
// doingStuff(); 
// console.log(x); // op: local local


// let x = "global";
// function doingStuff(x){
//    console.log(x); //parameter names overrides the global variable
// }
// doingStuff("Parameter"); // op : parameter


// function confuse(){
//     x= " guess my scope..."; // is let var is not used it wil automatically take global variable in input value
//     console.log("inside the function",x);
// }
// confuse();
// console.log("outside the function",x);


//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//the immmediately invoked function expression(IIFE) is a way of expressing a function so that it gets invoked immediately. it is anonymous ie. doesnot have a name.

// (function(){
//     console.log("IIFE");
// })(); //OP: IIFE

// (()=>{
//     console.log("run right away");
// })(); //op: run right away



//RECURSIVE FUNCTION

// function getRecursive(nr){
//     console.log(nr);
//     if(nr>0){
//     getRecursive(--nr);
//     }
// }
// getRecursive(3);

// function getRecursive(nr){
//     console.log("started function:",nr);
//     if(nr>0){
//     getRecursive(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("ended function:",nr); //due to recursion loop this line (to be executed) is pushed into stack.
// }
// getRecursive(3);
