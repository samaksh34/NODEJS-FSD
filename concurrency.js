
                                                                // CONCURRENCY
//Concurrency in JavaScript refers to the ability of the language to manage multiple tasks at the same time, or more accurately, interleave execution of asynchronous tasks even though JavaScript is single-threaded.

// 🔁 1. Callback
//A callback is a function passed as an argument to another function, to be called later.


//eg1
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("hiiii");
// }
// doSomething(sayHi);


// //eg2
// function judge(grade){
//     switch(true){
//         case grade ==  "A":
//             console.log("you got an", grade, " :amazingg !!");
//             break;

//         case grade ==  "B":
//             console.log("you got an", grade, " :WELL done !!");
//             break;

//         case grade ==  "C":
//             console.log("you got an", grade, " :alright !!");
//             break;
            
//         case grade ==  "D":
//             console.log("you got an", grade, " :amazingg !!");
//             break;
    
//         default : 
//             console.log("an", grade,"! what?!");
//     }
// }

// function getGrade(score, callback){
//     let grade;
//     switch(true){
//         case score >=90:
//             grade = "A";
//             break;

//         case score >=80:
//             grade = "B";
//             break;

//         case score >=70:
//             grade = "C";
//             break;

//         case score >=60:
//             grade = "D";
//             break;
        
//         default : 
//             grade =  "F";
//     }
//     callback(grade);
// }
// getGrade( 85 , judge );
// getGrade( 15 , judge );
// getGrade( 35 , judge );
// getGrade( 95 , judge );



// //eg3
// setInterval(encourage,500); //you can pass a function as an argument in another function. This is also CALLBACK

// function encourage(){
//     console.log("you re doing great !! keep goingg");
// }



// 📦 2. Promises
// A Promise is an object representing the future result (success or failure) of an asynchronous operation.
// uses resolve and reject parameters

//when resolve() is called the proise is preassumed  to be successful and whatever is between the arrows 
// is returned and used as input for the then method on the promise object. If reject() is called , the 
// promise failed and the catch() method and the promise object(if present) is executed with the arguemnt
//  of the reject function



// let promise = new Promise(function (resolve, reject) {
//     let x = 20;
//     if (x > 10) {
//         resolve(x);  // If condition is true, promise is resolved with value 'x'
//     } else {
//         reject("too low");  // If condition is false, promise is rejected with an error message
//     }
// });


// promise.then(
//     function(value) {
//         console.log("Success:", value);  // Handles successful resolution
//     },
//     function(error) {
//         console.log("Error:", error);   // Handles rejection (error)
//     }
// );



// const promise = new Promise((resolve,reject) => {
//     resolve ("success!");
// })

// //arrow fxn is used
// //chaining of dot-then (.then) is performed when resolve is used , first .then returns value to next .then and so on

// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return "can";
// })
// .then(value => {
//     console.log(value);
//     return "chain";
// })
// .then(value => {
//     console.log(value);
//     return "promises";
// })
// .catch(value => {
//     console.log(value);
// })



//if we call reject then it only o/p catch statement

// const promise = new Promise((resolve,reject) => {
//     reject ("oh no!");
// })

// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return "can";
// })
// .then(value => {
//     console.log(value);
//     return "chain";
// })
// .then(value => {
//     console.log(value);
//     return "promises";
// })
// .catch(value => {
//     console.log(value);
// })




//⏳ 3. async / await
// These keywords let you write asynchronous code like synchronous code, using Promises behind the scenes.


// function saySomething(x){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve("Something " + x + x);
//         },2000);
//     });
// }

// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }

// talk(2);
// talk(4);
// talk(7);


                                                            //EVENT LOOP
                                        // JavaScript is a single threaded language

//callstack exexution

// console.log("hii there");
// add(4,5);

// function add(x,y){
//     return x+y;
// }



// //call back queue .(all async code are executed in call back queue)

// console.log("hii there");
// setTimeout(()=>console.log("sorry im late"),1000);
// console.log(add(4,5));

// function add(x,y){
//     return x + y;
// }

// console.log("hii there");
// setTimeout(()=>console.log("sorry im late"),0); // same result as setTimeout is already a callback
// console.log(add(4,5));

// function add(x,y){
//     return x + y;
// }

