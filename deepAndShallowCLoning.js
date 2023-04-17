/**
 * Shallow Cloning
 * 
 * A reference variable stores an address of an object it refers to is called shallow copy.
 * In this case both the old and new variables point to the same object in memory.
 * the state changes of the object by any of the references will be affected both variables.
 */

/** 
 * Deep Cloning
 * 
 * Deep Cloning copies the entire object and creates a new copy of the object and allocates it into a new memory location
 * both of the copies are independent. 
 * any changes to any of the copies would not affect the other. 
 */

//Shallow Cloning

//create an object
let student={
    name:'AB',
    class:10,
    dob:'20-10-2000'
}

let studentCopy=student //shallow cloning

studentCopy.mark=20 //add new property to the copied object reference

console.log('student',student);
console.log('studentCopy',studentCopy); //both of the objects would reflect the addition of new property



//Deep Cloning
let employee={
    name:'CDE',
    age:28,
    department:"Development"
}

let employeeCopy=JSON.parse(JSON.stringify(employee)) //deep cloning

employeeCopy.salary=30000 //add new property to copied object

console.log('Employee :',employee);
console.log('Employee Copy:',employeeCopy); //here newly added property only affect the copied object.





