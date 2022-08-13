//spread operator as a magical multi-purpose tool that can spread out array items and join objects together

/*let top3 = [
  "The Colosseum",
  "Trive Flanders",
  "The Vatican City"
];
function showItinary(place1,place2,place3){
  console.log("Visit " + place1);
  console .log("Then visit " + place2);
  console.log("Finally visit " + place3);
}
showItinary();
//showItinary(top3[0],top3[1],top3[2]);Visit The Colosseum    Then visit Trive Flanders       Finally visit The Vatican City
showItinary(...top3);//output:Visit The Colosseum    Then visit Trive Flanders       Finally visit The Vatican City*/



//rest opeator 
//use the rest operator, and a technique known as de structuring
/*const top7 =[
  "The Colosseum",
  "Trive Flanders",
  "The Vatican City",
  "The Eiffel Tower",
  "The Grand Canyon",
  "The Great Wall of China",
  "The Great Pyramid of Giza"
]; 
const [] = top7;
const[first, second, third, ...secondVisit] = top7;*/

//Using the spread operator, it's easy to concatenate arrays:
/*const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries);   //[ 'apple', 'pear', 'plum', 'blueberry', 'strawberry' ]*/

//It's also easy to join objects:  
/*const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // output:{wings: 2, wheels: 4}*/

//how to use the spread operator to easily add one or more members to an existing array:
/*let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);  //output:[ 'onion', 'parsley', 'carrot', 'beetroot' ]*/

//copy an object into a completely separate object, using the spread operator.
/*const car1 = {
  speed: 200,
  color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) //output:201 200*/


/*const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2) //output:['apples'] not ['apples', 'pears']*/

// output example
/*const meal = ["soup", "steak", "ice cream"]
    let [starter] = meal;
    console.log(starter); //output:soup*/

    /*let food = "Chocolate";
    console.log(`My favourite food is ${food}`); //output:My favourite food is Chocolate*/



    /*let obj = {
      key: 1,
      value: 4
  };*/

  /*let output = { ...obj };
  output.value -= obj.key;

  console.log(output.value);//output:3*/



  /*function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6); output: 5*/  