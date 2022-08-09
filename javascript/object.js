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
 
}*

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


var rounded = Math.ceil(0.99);
console.log(rounded);  // output: 1*/

// array iterable
var veggies = ['onion','parsly','carrot'];

console.log(veggies.length);
console.log(veggies[0]);
console.log(veggies[2]);

for(var i = 0;  i < veggies.length; i++){
  console.log(veggies[i]);//output: 3   onion   carrot    onion    parsly   carrot
}


//string are iterable
 var greeting = 'Howdy';
 console.log(greeting.length);
 console.log(greeting[0]);
 console.log(greeting[2]);
for( var i = 0; i < greeting.length; i++){
  console.log(greeting[i]);
}

var greet = 'Hello';
var user = 'Robin';
//console.log(greet.pop()); //output: error greet.pop is not a function
console.log(greet + user );  // output:HelloRobin
console.log(greet.concat(user));  //output:HelloRobin

var greet = "Hello, ";
var place = "World";
console.log(greet.length);  //output:7
console.log(greet.charAt(2)); //output:l

// exercise
var clothes = [ ];
clothes.push('jeans');
clothes.push('shirt');
clothes.push('jumpsuit');
clothes.push('tshrit');
clothes.push('skirt');
console.log(clothes);
clothes.pop('skirt');
console.log(clothes);
clothes.push('skarf');
console.log(clothes);
console.log(clothes[3]);
 var favcar = {}
  favcar.color ="pink";
  favcar.covertible = "true";
  console.log(favcar);

var car = {};
car.color = "red"; 
car.mileage = 98765;
console.log(car);  //output: { color: 'red', mileage: 98765 }
car.turnTheKey = function(){
  console.log('engine running'); 
}
console.log(car); //output: { color: 'red', mileage: 98765, turnTheKey: [Function (anonymous)] }

car.lightsOn = function(){
  console.log('The lights are on');
}
console.log(car);
car.turnTheKey();
car.lightsOn();

// typeOf 
//var test = typeof('what is this?');
//var test = typeof(123);
//var test = typeof(3.34);
//var test = typeof(true);
//var test = typeof(false);
//var test = typeof(1<3);
//var test = typeof([1,2,3]);  // output: object ........arrays in javascript is are object
var test = typeof({ firstproperty: 1 });
//var test = typeof(function abc(){console.log('abc')});
console.log(test);


var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');
console.log(clothes.length);


var dog = {
  color: "brown",
  height: 30,
  length: 60
};
dog["type"] = "corgi";
console.log(dog);