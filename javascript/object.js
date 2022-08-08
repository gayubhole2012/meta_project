/*var assistantManager = {                            //declare object
 moment: 4,    //Objects can be described as collections of related properties where each property is represented as a key value pair.
 socialSkills: 50,
 streetSmarts: 30,
 health: 30,                                    // properties and value in curly braces
}         // created an object and assign some value


assistantManager.nextachivement = "get promoted";  // you can add using . notaion 

var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money"
}
console.log(assistantManager.health);

var house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
}
var house2 = {}
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;  //output: { rooms: 4, color: 'pink', priceUSD: 12345 }
console.log(house2);
console.log(house);        //output: { rooms: 3, color: 'brown', priceUSD: 10000 }
house.window =10;
console.log(house);         // output: { rooms: 3, color: 'brown', priceUSD: 10000, window: 10 }

//build objects using the brackets notation
var house3 = {}
house3["rooms"] = 4;
house3["colors"]= "pink";
house3["priceUSD"]= 234;
console.log(house3);  // output:{ rooms: 4, colors: 'pink', priceUSD: 234 }


var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // output:{ color: 'green', speed: 100 }



var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);   // output: 100  200  red
    
}


//array are object
var fruit = [];
fruit.push('apple');
fruit.push('pear');
fruit.push('grapes');
console.log(fruit);     //output: [ 'apple', 'pear', 'grapes' ]
fruit.pop();
console.log(fruit);   //output: [ 'apple', 'pear' ]



/*function arrayBuilder(one,two,three){
  var arr = [];
  arr.push('one');
  arr.push('two');
  arr.push('three');
  //console.log(arr); // output:[ 'one', 'two', 'three' ]
 
}*/

function arrayBuilder(one,two,three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
var simpleArr =arrayBuilder('apple', 'pear', 'plum');
var simpleArr2 = arrayBuilder('wedd','asee','seded');
console.log(simpleArr); 
console.log(simpleArr2);    // output: [ 'apple', 'pear', 'plum']    [ 'wedd', 'asee', 'seded' ]
