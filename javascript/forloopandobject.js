
//  for of loop cannot work on an object directly
/*const car = {
  color: 'red',
  speed: 100
}
for(prop of  car)
{
  console.log(prop);  //output:TypeError: car is not iterable
}*/

// Contrary to objects, arrays are iterable

/*const colors = ['red','pink','orange'];
for(var color of colors){
  console.log(color);
}*/

//The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over.
/*const car2 = {
  speed: 120,
  color: "orange"
}
console.log(Object.keys(car2));//output: [ 'speed', 'color' ]*/

// Object.values()
/*const car3 = {
  speed: 120,
  color:"red"
}
console.log(Object.values(car3)); //output:[ 120, 'red' ]*/

// Object.enteries()

/*const car4 ={
  speed: 140,
  color: "white"
}
console.log(Object.entries(car4));  //output:[ [ 'speed', 140 ], [ 'color', 'white' ] ]*/

/*const clothingItem ={
  price:50,
  color:'beige',
  material:'cotton',
  season:'autumn'
} 
for(key of Object.keys(clothingItem) ){
console.log(keys,":" ,clothingItem[key]);
} // output:keys is not defined */

//example
/*function Access(){
  var dynamicKey = Math.random() > 0.5? "speed": "color";
  var drone = {
    speed: 12,
    color: "silver"
  }
  console.log(drone[dynamicKey]);
}
Access(); //output:12    run again then output will be 
          // output:silver  */


/*const car = {
  engin: true,
  streeing: true,
  speed: 'slow'
}  
const sportsCar = Object.create(car); //inheries the property of car variable
sportsCar.speed = 'fast';
console.log("The sports car object:",sportsCar);
console.log("--------for in un reliable---------");
for(prop in sportsCar){
  console.log(prop);
}
console.log("Iterting over object and its property");
console.log('--------for in reliable---------');
for(prop of Object.keys(sportsCar)){
  console.log(prop + ":" + sportsCar[prop]);
}
console.log("Iterating over object's OWN property only !");  //output: --------for in un reliable--------  speed  engin  streeing  Iterting over object and its property
//--------for in reliable---------
//speed:fast
//iterting over object's OWN property only !  */


// The for-of loop will iterate over the object's own properties only when using the Object.keys() method to return an array to loop over.
//for-of loop will not iterate over the object and its prototype properties.
//for in loops, iterate over the properties of the object and its prototype

/*const car = {
  engine :true
}
const sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log("The sports car object:",sportsCar);
 
for(prop in sportsCar){
  console.log(prop);
}

for(prop of Object.keys(sportsCar)){
  console.log(prop + ":" + sportsCar[prop]);
} //output:The sports car object: { speed: 'fast' }   speed   engine     speed:fast*/

//variable interpolation:
/*let greet = "Hello";
let place ="World";
console.log(` ${greet}  ${place}`); //output: Hello World*/

/*var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); //output: Hello World!*/


//templete literals
//ES5
/*let greet = "No multiline string in ES5";
console.log("Did you know ? " + greet); //output: Did you know ? No multiline string in ES5*/

//ES6 multiline template literal
/*let multiline = `
   Using ES6 
   backticks,
   multiline 
   string 
   possible!
   `;
console.log(multiline); //output:     Using ES6 
                       //             backticks,
                      //              multiline 
                     //               string 
                    //                possible!   */

          
//example
/*let first = `He said,"Don't you konw?ES6, it's got some greate features!"`;
let second = `"Woudn't you want to learn more?" he asked?`;
console.log(`${first} and i got curious ${second}`); //output:He said,"Don't you konw?ES6, it's got some greate features!" and i got curious "Woudn't you want to learn more?" he asked?*/

//Assignment week 3 advanced javascript features
//task 1
/*function logDairy() {
  const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
  for (var daires of dairy) {
  console.log( daires );
}
}
logDairy();    //output:  cheese  sourcream    milk    yogurt      ice cream      milkshake*/

//Task2

/*function birdCan() {
  const animal = {
      canJump: true
  };
  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;
  for (prop of Object.keys(bird)) {
      console.log(prop +": " + bird[prop]);
  }
}
birdCan();*/  //output: canFly: true     hasFeathers: true

//Task3
/*function animalCan() {
  const animal = {
     canJump: true
 };
 const bird = Object.create(animal);
 bird.canFly = true;
 bird.hasFeathers = true;
 for (prop in bird) {
     console.log( prop + " : " + bird[prop]);
 }
}
animalCan(); //output: canJump canFly hasFeathers*/


