/**a prototype is an inbuilt object where it associated with the functions by default,
 which can be accessible, modifiable, and create new variables and methods to it and 
 share across all the instances of its constructor function. */

 //In short we can add a variable or a method into a class at any point of time.

 //USE CASE
 /**
  * we have created a class of employee. 
  * at later stage we need to add a new property or a function or both for all its instances
  * we can add these new changes by using prototype
  */

  function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary
  }

  //create instance 1
  let  emp1=new Employee('A',30,25000)
  //create instance 2
 let  emp2=new Employee('B',28,40000)

 console.log('Employee 1 :', emp1);
 console.log('Employee 2 :', emp2);

 //at this point we need to add a new property department to the class
 Employee.prototype.department='Development'
 console.log('EMP 1 Department :',emp1.department);
 console.log('EMP 2 Department :',emp2.department);

 //we can also add a function to the class
 Employee.prototype.displyDetails=function (){
    console.log('Name :',this.name);
    console.log('Age :',this.age);
    console.log('Salary :',this.salary);
    console.log('Department :',this.department);
 }

 emp1.displyDetails()
 emp2.displyDetails()