//without using this keyword
/*var purchase1= {                                                                                                                   
  shoes:100,
  taxRate: 1.2,
  totalPrice: function(){
    var calculation = purchase1.shoes * purchase1.taxRate;
    console.log('Total Price:',calculation);
  }
}  
purchase1.totalPrice();


var purchase2= {
  shoes:120,
  taxRate: 1.2,
  totalPrice: function(){
    var calculation = purchase2.shoes * purchase2.taxRate;
    console.log('Total Price:',calculation);
  }
}
purchase2.totalPrice();*/


//with this keyword
/*var purchase1= {                                                                                                                   
  shoes:100,
  taxRate: 1.2,
  totalPrice: function(){
    var calculation = this.shoes * this.taxRate;
    console.log('Total Price:',calculation);
  }
}  
purchase1.totalPrice();


var purchase2= {
  shoes:120,
  taxRate: 1.2,
  totalPrice: function(){
    var calculation = this.shoes * this.taxRate;
    console.log('Total Price:',calculation);
  }
}
purchase2.totalPrice();*/

// funcion programming example
/*var shoes =100;
var taxRate =1.2;

function totalprice(shoes,tax){
  return shoes * tax;
}
var pay = totalprice(shoes * taxRate);
console.log(pay);*/


//class program

 /*class Car{                              //constructor function is to assign the passed in parameters to the future objects properties
  constructor(color,speed){            //constructor function that is used when instantiating new objects, instances of a given class
    this.color = color;
    this.speed = speed;
  } 
  turboOn() {        //this is function..but not using function keyword
    console.log("turbo is On!");
  }                               
 }      */                         

 //base class 
 /*class  Animal 

var myDog = new Animal()

console.log (Animal) //[class Animal]*/

//There is a base class of "Animal".
//There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".
 //Next, there is another class, inheriting from "Bird", and this class is "Eagle".

 /*class Animal                // ...class code here... 
class Bird extends Animal            // ...class code here... 
class Eagle extends Bird    */       // ...class code here... 

//Polymorphism
/*class Bird {
  useWings() {
      console.log("Flying!")
  }
}
class Eagle extends Bird {
  useWings() {
      super.useWings()
      console.log("Barely flapping!")
  }
}
class Penguin extends Bird {
  useWings() {
      console.log("Diving!")
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"*/


/*const bicycle = {
  bell: function() {
      return "Ring, ring! Watch out, please!"
  }
}
bicycle.bell();
const door = {
  bell: function() {
      return "Ring, ring! Come here, please!"
  }
}
door.bell();

function ringTheBell(thing) {
  console.log(thing.bell())
}
ringTheBell(bicycle);*/


//Inheritance

var bird={
    hasWing: 'true',
    canFly: 'true',
    hasFeather:'true'
}
var egle1 = Object.create(bird);                       //output:egle1: { }     egle1 can fly: true     egle1 has wing: true     egle1 has feather: true
                                                     
console.log('egle1:', egle1);
console.log("egle1 can fly:",egle1.canFly);
console.log("egle1 has wing:",egle1.hasWing);
console.log("egle1 has feather:", egle1.hasFeather); 

var egle2 = Object.create(bird);
console.log("egle2 can fly:",egle2.canFly);    //output: egle2 can fly: 

var penguin1 =Object.create(bird);
penguin1.canFly = 'false';
console.log("penguin1",penguin1);             //output: penguin1 { canFly: 'false' }
console.log("penguin1 has feather",penguin1.hasFeather);  //output:  penguin1 has feather true
console.log("penguin1 has wing",penguin1.hasWing);         // output:  penguin1 has wing true
