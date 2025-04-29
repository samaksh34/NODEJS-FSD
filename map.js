                                                            // MAPS

// using new MAP() Method
// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// console.log(fruits);

// // using SET() Method

// const fruit = new Map(); 

// fruit.set("apples",500); //performs new insertion
// fruit.set("mangoes",300);
// fruit.set("kiwi",400);
// console.log(fruit);

// //using GET() Method;

// fruits.get("apples");

// console.log(typeof fruits); //returns type of el
// console.log(fruits.size); //returns number of el
// fruits.delete("apples"); //deletes apple entry
// fruits.clear; //removes all el entries from the map
// fruits.has("apples"); // returns true if key exist in the map

// let text = " ";
// fruits.forEach(function(value,key){
//     text += key + " = " + value + " ";
// })
// console.log(text);

// let text = " ";
// for (const x of fruits.entries()){ // accessing pair entries
//     text += x +" ";
// }
// console.log(text);

// let text1 = " ";
// for (const x of fruits.keys()){ //accessing keys
//     text1 += x +" ";
// }
// console.log(text1);

// let text2 = " ";
// for (const x of fruits.values()){ //acessing values
//     text2 += x +" ";
// }
// console.log(text2);

//Object as keys

//create objects
// const apples = {name: "APPLES"};
// const mangoes = {name: "MANGOES"};
// const bananas = {name: "BANANAS"};

// const fruits = new Map();
// fruits.set(apples,200);
// fruits.set(mangoes,400);
// fruits.set(bananas,300);
// console.log(fruits);
// console.log(fruits.get(apples));


                                                        // DESTRUCTURING
                                            // used to unpack objects into variables

// //create an object
// const person = {
//     firstname: " Jhon",
//     lastname: " Doe" ,
//     age: 50
// };

// //Destructuring 
// let {firstname,lastname,age} = person; // here order of the properties doesnot matter
// console.log(firstname);
// console.log(lastname);
// console.log("he is:",age);


                                                    // ALIAS CREATION

// const person = {
//     firstname: "Jhon",
//     lastname: "Doe",
//     age:50
// };
// //destructuring
// let{lastname:name} = person;
// console.log(name);


// //create a string
// let name = "GurukulTheSchool";
// //destructuring
// let [a1,a2,a3,a4,a5]=name;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(name);

// //array destructuring

// //create an array
// const fruits = ["pear","banana","mango","guava"];
// //destructuring
// let{[0]:fruit1,[3]:fruit4} = fruits;
// console.log(fruit1);
// console.log(fruit4)


// REST PROPERTY

//we can add a destructuring syntax with rest property as it store all remaining value in a new array

// // array creation
// const num = [10,20,30,40,50,60,70];

// //destructuring
// const[a,b,...rest] = num ; //30-70 now becomes an array 

// console.log(a);
// console.log(rest);



// //swapping using destructuring

// let firstname = "John";
// let lastname = "Doe";

// //destructuring
// [firstname,lastname] = [lastname,firstname]; //firstname and lastname are exchanged
// console.log(firstname);
// console.log(lastname);




                                                            // EXPONENTIAL OPERATOR **

// let x = 2**3; //two method to calculate this
// console.log(x);
// console.log(Math.pow(2,3));


// let x =5;
// x**=2 ;// result 25
// console.log(x);



// JS ARRAYS [INCLUDES] METHOD
// it is case sensitive ie upper/lower case are also matched. return boolean values


// const fruits = ["apple","mango","pear","guava"];

// console.log(fruits.includes('mango')); //true
// console.log(fruits.includes('grapes')); //false


// // TRAILING COMMAS

// const arr = ["one","two","three",]; //comma after three is a trailing comma

// const person = {firstname : 'jhon' , lastname: 'doe',//cant put extra , 
//     age:30,
// }