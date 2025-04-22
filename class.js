// classes are a blueprint or template for object creation
// obejcts are collection of properties nd methods
// use of classes in js development reduced complexity of application and increased maintainiblity.

// this.obj // refer for instance variable its scope is till life of an object class variable
// obj // refer global variable

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new ClassName("arg1",'arg2');
// console.log(obj.prop1)
// console.log(obj.prop2)

// class Dog{
//     constructor(DogName,weight,color,breed){
//         this.DogName = DogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog ("Javascript",10,5,"brown") //entry 1
// console.log(dog.DogName);
// console.log(dog.weight);


//CLASSES

// classes are a blueprint or template for object creation
// the first letter of any class should be capital its considered as bestpractice
//first el in calss is constructor -  it

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let x = new Person ("samaksh","saxena")
// console.log("hello " + x.firstname + " " +x.lastname);



//default values in constructor

// class Person{
//     constructor(firstname,lastname = "sharma"){ //defaut argument must be trailing ie (L<--R) argument
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let x = new Person ("samaksh")
// console.log("hello " + x.firstname + " " +x.lastname);



//METHODS

// //functions on a class is known as methods. we dont use function keyword here
// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     greet(name){
//         console.log(name + " " + "hieee there!!! I'm",this.firstname,this.lastname);
//     }

//     compliment(name,object){
//         return "thats a wonderful" + object + ", " + name;
//     }
// }

// let p=new Person("samaksh","saxena")
// p.greet("hello");
// console.log(p.compliment("sam"," plan")); //printing value of the function



// class Person{
//         constructor(firstname,lastname){
//             this.firstname = firstname;
//             this.lastname = lastname;
//         }
//     }
// let p = new Person("akshay","kumar");
// console.log(p.firstname); // cannot acess private member



// class Person{
//     constructor(firstname,lastname){
//         if(firstname.startsWith("M")){
//             this.#firstname = firstname; //using hashtag we can acess private member
//         }
//         else{
//             this.#firstname = 'M'+firstname;
//         }
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("akshay","kumar");
// console.log(p.firstname); 

class Person{
    #firstname
    #lastname
    constructor(firstname,lastname){
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    get firstname(){
        return this.#firstname;
    }
    set firstname(firstname){
        this.firstname = firstname;
    }
    get lastname(){
        return this.#lastname;
    }
    set lastname(lastname){
        this.lastname = lastname;
    }
}
let p = new Person("jhon"," wick");
console.log(p.lastname);

p.lastname = " Cena"
console.log(p.lastname);