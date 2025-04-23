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

const person = {
    firstname: "Jhon",
    lastname: "Doe",
    age:50
};
//destructuring
let{lastname:name} = person;
console.log(name);