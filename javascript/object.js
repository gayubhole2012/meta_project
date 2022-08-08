/*var assistantManager = {                            //declare object
 moment: 4,    //Objects can be described as collections of related properties where each property is represented as a key value pair.
 socialSkills: 50,
 streetSmarts: 30,
 health: 30,                                    // properties and value in curly braces
}         // created an object and assign some value


assistantManager.nextachivement = "get promoted";  // you can add using . notaion */

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

