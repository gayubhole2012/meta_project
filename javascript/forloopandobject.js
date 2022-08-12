
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