// object
/*(const car = {
  owner : 'Jhon',
  color: 'Red',
};
  enginOn = function(){
  console.log('Engine is On');
}*/

//Array
/*const grades =[75,95,90,85,78,89];
let gradeSum = 0;
for(let i = 0; i < grades.length; i++){
  gradeSum += grades[i];
}
console.log(gradeSum/grades.length);*/


//array
//forEachloop          forEach() method accepts a function that will work on each array item
/*const fruits= ['Kiwi','Mango','Pineapple','Apple','Banana'];
function myName(fruit,index){
console.log(`${index} . ${fruit}`);
}
fruits.forEach(myName); //output: 0 . Kiwi 1 . Mango 2 . Pineapple 3 . Apple 4 . Banana */

//example forEach
/*const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});  //output: 0. onion 1. garlic 2. potato */

//filter() method
//array is the filter() method. It filters your arrays based on a specific test.
/*const nums = [12,34,45,56,65,43];
nums.filter( function(num) {
  return nums > 30;
})

//map() method
const num = [0,20,30,40,50].map( function(num) {
  return num / 10
})*/


/*const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result); */ //[ 'speed', 100, 'color', 'yellow' ]

//example of Map
/*let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);  //output: Map(3) { 1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place' } */


// example of Set
/*const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);    //output: Set(3) { 'apple', 'pear', 'plum' } */