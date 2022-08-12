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

/*var bird={
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
console.log("penguin1 has wing",penguin1.hasWing);         // output:  penguin1 has wing true*/


/*class Train{
  constructor(color,lightsOn){
    this.color = color;
    this.lightsOn =  lightsOn;
  }
}
new Train();
var myFirstTrain = new Train('red',false);
console.log(myFirstTrain);
var myThirdTrain = new Train('blue', true);
console.log(myThirdTrain);*/         //output: Train { color: 'red', lightsOn: false }      Train { color: 'blue', lightsOn: true }


/*class Train {
  constructor(color, lightsOn) {
      this.color = color;
      this.lightsOn = lightsOn;
  }
  toggleLights() {
      this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
      console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
      console.log(this);
  }
  getPrototype() {
      var proto = Object.getPrototypeOf(this);
      console.log(proto);
  }
}*/

//var train4 = new Train('pink',false);
//train4.toggleLights();    
//train4.lightsStatus();     //output: Lights on? true
//train4.getSelf();        //output:  Train { color: 'pink', lightsOn: true }
//train4.getPrototype();         // output: {}    */

/*class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
}
toggleHighSpeed() {
  this.highSpeedOn = !this.highSpeedOn;
  console.log('High speed status:', this.highSpeedOn);
}
toggleLights() {
  super.toggleLigths();
  super.lightsStatus();
  console.log('Lights are 100% operational.');
}
}
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype();*/

//example
/*class StationaryBike {
  constructor(position, gears) {
      this.position = position
      this.gears = gears
  }
}

class Treadmill {
  constructor(position, modes) {
      this.position = position
      this.modes = modes
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
      this.openHrs = openHrs
      this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
      this.treadmill = new Treadmill(treadmillPos, 5)
  }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //7-22
console.log(boxingGym.stationaryBike) // StationaryBike { position: 'right corner', gears: 8 }
console.log(boxingGym.treadmill) //Treadmill { position: 'left corner', modes: 5 }*/
 

//example2
/* class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
      this.num1 = num1;
      this.num2 = num2;
      this.num3 = num3;
      this.string1 = string1;
      this.bool1 = bool1;
  }
  calculate() {
      if(this.bool1) {
          console.log(this.string1, this.num1 + this.num2 + this.num3);
          return;
      }
      return "The value of bool1 is incorrect"
  }
}
var better = new WithDefaultParams();
better.calculate(); // output:Result: 6*/

//example 
      //          Animal
  //          /            \
//          Cat             Bird
//     /               \          \
// HouseCat           Tiger      Parrot

/*class Animal{
  constructor(color = 'yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
}
isActive() {
  if(this.energy > 0) {
      this.energy -= 20;
      console.log('Energy is decreasing, currently at:', this.energy)
  } else if(this.energy == 0){
      this.sleep();
  }
}
sleep() {
  this.energy += 20;
  console.log('Energy is increasing, currently at:', this.energy)
}
getColor() {
  console.log(this.color)
}
}
class Cat extends Animal {
  constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
}
makeSound() {
    console.log(this.sound);
}
}
class Bird extends Animal{
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
}
makeSound() {
    console.log(this.sound);
}
}
class HouseCat extends Cat{
  constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
    super(sound,canJumpHigh,canClimbTrees, color,energy);
    this.houseCatSound = houseCatSound;
}
makeSound(option) {
    if (option) {
        super.makeSound();
    }
    console.log(this.houseCatSound);
}
}
class Tiger extends Cat{
  constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
    super(sound,canJumpHigh,canClimbTrees, color,energy);
    this.tigerSound = tigerSound;
}
makeSound(option) {
    if (option) {
        super.makeSound();
    }
    console.log(this.tigerSound);
}
}
class Parrot extends Bird{
  constructor(canTalk = false, sound,canFly, color,energy) {
    super(sound,canFly, color,energy);
    this.canTalk = canTalk;
}
makeSound(option) {
    if (option) {
        super.makeSound();
    }
    if (this.canTalk) {
        console.log("I'm a talking parrot!");
    }
}
}
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!*/

 // assignment 
/*class Worker extends Person {
  constructor(name="Tom", age=20, energy =100, xp = 0 , hourlyWage =10) {
      super(name, age, energy)
      this.name = name;
      this.age = age;
      this.energy = energy;
      this.xp = xp;
      this.hourlyWage = hourlyWage;
  }
  goToWork(){
      return this.xp + 10;
  }
}
// Task 3: Code an intern object, run methods
function intern() {
  const name = 'Bob';
  const age = 21;
  const energy = 110;
  const xp = 0;
  const hourlyWage = 10;
  const intern = new Worker(name, age, energy, xp, hourlyWage);
  intern.goToWork();
  return intern;
}
console.log(intern())
// Task 4: Code a manager object, methods
  function manager() {
      
      const manager = new Worker('Alice', 30, 120, 100, 30);
  
      manager.doSomethingFun()
      return manager;
  }*/


/*class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
  }
var result = new Cake(1);
console.log(result.layers); //output:2   */

/*class Animal {
  constructor(lg) {
      this.legs = lg;
  }
}
class Dog extends Animal {
  constructor() {
      super(4);
  }
}
var result = new Dog();
console.log(result.legs);     //output:4 */


/*class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise); //output: undefined*/

class Person {
  sayHello() {
      console.log("Hello");
  }
}

class Friend extends Person {
  sayHello() {
      console.log("Hey");
  }
}

var result = new Friend();
result.sayHello(); //output:Hey

