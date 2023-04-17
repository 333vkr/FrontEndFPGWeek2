/** Object oriented programming in JS basic concepts are
 * 1. Object
 * 2.Classes
 * 3.Encapsulation
 * 4. Abstraction
 * 5.Inheritance
 * 6.Polymorphism
 */

/** Objects
 *  An object is a unique entity that contains properties and methods.
 * the characteristics of an object are called Properties.
 * the actions are called Methods.
 */

/**Classes
 * Classes are blueprints of an object. 
 * A class can have many objects because class is a template while objects are instances of class.
 * there is no classes in JS, we have only Objects
 * JS is a prototype based Object Oriented Language, which means it doesn’t have classes,
 * rather it defines behaviors using a constructor function and then reuses it using the prototype.
 */

/**Encapsulation
 * the process of wrapping properties and functions within a single unit is known as encapsulation
 */

/**Abstraction
 * it means displaying only essential information and hiding the details.
 * Data abstraction referes to providing only essential information about the data to the outside world.  
 */

/**Inheritance
 * it is the concept in which some properties or methods of an Object are being used by another object.
 * JS Object inherits Objects. i.e. certain features (property and methods) of one object can be reused by other Objects. 
 */

/**Polymorphism
 * Polymorphism means the same function with different signatures is called many times.
 * Polymorphism can be achieved by method overriding and method overloading.
 */


//Objects
// Defining object
let person = {
    first_name:'Mukul',
    last_name: 'Latiyan',
  
    //method
    getFunction : function(){
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }
}
console.log(person.getFunction()); 
console.log(person.phone_number.landline);

//*Classes
// Defining class using es6
class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
  }
  // Making object with the help of the constructor
  let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
  let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
    
  console.log(bike1.name);    // Hayabusa
  console.log(bike2.maker);   // Kawasaki
  console.log(bike1.getDetails());



  //*Encapsulation
  // Encapsulation example
  class personClass{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`Name is ${this.name},
        Address is: ${this.add}`);
    }
}
  
let person1 = new personClass('Mukul',21);
person1.add_Address('Delhi');
person1.getDetails();


//*Inheritance 
 // Inheritance example
 class personClass1{
    constructor(name){
        this.name = name;
    }
    // method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends personClass1{
    constructor(name,id){
        // super keyword for calling the above 
        // class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());

