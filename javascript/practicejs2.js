//if statement
function trueorfalse(istrue){
  if(istrue){
  return "Yes it was true";
  }
  return "No it was false";
}

console.log(trueorfalse(false));//No it was false

//comparison betwwen equality operator
function equaloperator(val){
  if(val == 10){
    return "is Equal";
  }
  return "is not Equal";
}
console.log(equaloperator(12)); //is not Equal

//comparison between strict equality operator
function testequality(val){
  if(val === 10){     // === operator check both values and data type
    return "equal";
  }
  return "not equal";
}
console.log(testequality('10')); //not equal

//inequality operator
function testinequality(val){
  if(val != 34){
    return "not equal";
  }
   return "equal";
  }
  console.log(testinequality(34)); //equal
  console.log(teststrictequality('34')); //not equal

  //strict inequality operator
  function teststrictequality(val){
    if(val !== 10)  //only check values not data type
    {
    return "not equal";
  }
  return "equal";
  }
  console.log(teststrictequality(10));//equal
  console.log(teststrictequality('10')); // not equal

  //comparision logical operator > 
  function testgreaterthan(val){
    if(val > 100){
       return "over 100";
    }
    if (val > 10){
      return "over 10";
    }
    return "10 or under";
  }
  console.log(testgreaterthan(234)); //  over 100

  //comparision logical operator >=
  function greaterthanequal(val){
    if(val >= 20){
      return "20 or over";
    }
    if(val >= 10){
      return "10 or over";
    }
    return "less than 10";
  }
  console.log(greaterthanequal(4)); // less than 10
  console.log(greaterthanequal(10)); // 10 or over

  //comparision logical operator <
  function lessthan(val){
    if (val < 20){
      return "under 20";
    }
    if(val < 10){
      return "under 10";
    }
    return "less tham 10";
  }
  console.log(lessthan(15)); // under 20

  //comparision logical operator <=
  function lessthanequal(val){
    if(val <= 20){
      return "under 20";
    }
    if(val <= 10){
      return "under 10";
    }
    return "more than 20";
  }
  console.log(lessthanequal(3));// under 20

  //comparision with logical and operator &&
  function testand(val){
    if(val <=20 && val >=10){
      return "yes";
    }
    return "no";
  }
  console.log(testand(78)); // no

  //comparision with logical or operator ||
 function testor(val){
  if(val < 10 || val > 20 ){
    return "outside";
  }
  return "inside";
 }
console.log(testor(67)); // outside

//if else statement
function ifelse(val){
  if(val > 10){
    return "greater than 10";
  }else{
    return "10 or under";
  }
}
console.log(ifelse(90)); //greater than 10

//else if statement
function elseif(val){
  if(val > 10){
    return "greater than 10";
  }else if(val < 5) {
    return "smaller than 5";
  }else{
    return "between 5 and 10";
  }
}
console.log(elseif(1)); //smaller than 5

//logical order in if else statement
function order(val){
  if(val < 5){
    return "smaller than 5";
  }else if(val < 10){
    return "smaller than 10";
  }else{
    return "greater than or equal to 10";
  }
}
console.log(order(12)); //greater than or equal to 10

//switch statement
function swtichstmt(val){
  var answer = "";
  switch(val){
    case 1:
      answer = "alpha";
      break;
      case 2:
        answer = "beta";
        break;
       case 3:
        answer = "gamma";
        break;
        case 4:
          answer = "delta";
          break;
          default:
            answer = "stuff";
            break;
    }
   return answer;
  }
  console.log(swtichstmt(3));  //gamma

  //multiple identical options in switch statement
  function multipleidentical(val){
    var answer = " ";
    switch(val){
      case 1:
        case 2:
          case 3:
            answer = "low";
            break;
            case 4:
              case 5:
                case 6:
                  answer = "mid";
                  break;
                  case 7:
                    case 8:
                      case 9:
                        answer = "high";
                        break;
    }
    return answer;
  }
  console.log(multipleidentical(4)); //mid

 //card counting game
 var count = 0;
 function cc(val){
   switch(val){
    case 1:
    case 2:
    case 3:
    case 4:
      count ++;
      case 10:
      case "j":
      case "q":
      case "k":
      case "a":
        count --;
   }
    var holdbet = "hold";
        if(count > 0){
          holdbet = "bet";
        }
        return count + " "  + holdbet;
 }
 cc(2); cc(3); cc(7); cc('k'); cc('a');
  console.log(cc(5)); 

  //accessing object properties with dot notation
  var testdog = {
    "name": "Tiger",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  }

  var hatvalue = testdog.name; //accessing object properties with dot notation
  console.log(hatvalue); //Tiger

  //accessing object properties with bracket notation
  var testdog = {
    "name first": "Tiger",
    "legs sweep": 4,
    "tails": 1,
    "friends": ["everything!"]
  }
  var hatvalue = testdog["legs sweep"]; //accessing object properties with bracket notation
 console.log(hatvalue); //4

 //accessing object properties with variables
 var testdog = {
  "name": "Tiger",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
testdog.name = "happy tiger" ; 
console.log(testdog.name); //happy tiger

//add new properties to object
var testdog = {
  "name": "Tiger",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
testdog.bark = "woof"; // addv new properties to object with . notation
testdog['bite'] = "hard"; // add new properties to object with [] notation
console.log(testdog.bark); //woof

//delete properties from object
 var mydog = {
    "name": "happy tiger",
    "legs": 4,
    "tail": 1,
    "friends": ["everything!"]
 }

delete mydog.tail ;
console.log(mydog); //{ name: 'happy tiger', legs: 4, friends: [ 'everything!' ] }

//using objects for lookups
function phonelookup(val){
  var result = "";
  var lookup = {
    "alpha": "adams",
    "bravo": "boston",
    "charlie": "chicago",
    "delta": "denver",
    "echo": "easy",
    "foxtrot": "frank"
  }
  result = lookup[val];
  return result;
}
console.log(phonelookup("charlie")); //chicago

//testing objects for properties

myobj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
}
function checkobj(checkprop){
  if(myobj.hasOwnProperty(checkprop)){    //hasOwnProperty() method is used to check if an object has a specified property
    return myobj[checkprop];
  }else{
    return "not found";
 }

}
console.log(checkobj("gift")); //pony

//manipulating complex objects
var mymusic = [
  {
    "artist": "Billy Joel",
    "title" : "pioano",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold" : true
  },
  {
    "artist": "Beethoven",
    "title" : "sonata",
    "release_year": 1801,
  }
];
console.log(mymusic); //[ { artist: 'Billy Joel', title: 'pioano', release_year: 1973, formats: [ 'CD', '8T', 'LP' ], gold: true }, { artist: 'Beethoven', title: 'sonata', release_year: 1801 } ]

//accessing nested arrays
var nestedobj = [
  {
  "type" : "plant",
  "list" : [
  "rose",
  "tulip",
  "dandelion"
]
},
{
  "type" : "animal",
  "list" : [
    "cat",
    "dog",
    "fish"
  ]
}
];
var second = nestedobj[1].list[2];
console.log(second); //fish

//iterate with while loops
 var myarray = [];
 var i =0;
 while(i < 5){
  myarray.push(i);
  i++;
 }
 console.log(myarray); //[ 0, 1, 2, 3, 4 ]

 //iterate with for loops
 var myarray = [];
 for(i = 1; i < 9; i++){
    myarray.push(i);
 }
 console.log(myarray); //[ 1, 2, 3, 4, 5, 6, 7, 8]

 //iterate odd numbers with a for loop
 var myarray = [];
 for(i=1; i<10; i +=2){
  myarray.push(i);
 }
console.log(myarray); //[ 1, 3, 5, 7, 9 ]

//count backwards with a for loop
var myarray = [];
for( i = 10; i>0; i-=2){ //even backword numbers
myarray.push(i);
}
for(i =9; i >0; i-=2) //odd backword numbers    //
console.log(myarray);// [ 10, 8, 6, 4, 2 ]

//iterate through an array with a for loop
var myarray = [2,3,4,5,6,7];
var sum = 0;
for(i=0;i<myarray.length;i++){
  sum += myarray[i];
}
//var sum = myarray.reduce((a,b) => a+b);
console.log(sum); //27          or you can use reduce method  

//nesting for loops
function multipleloop(arr){
  var product = 1;
  for (let i=0 ; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      product *= arr[i][j]; //i refers to outer array and j refers to inner array
    }
  }
  return product; 
}
console.log(multipleloop([[1,2],[3,4],[5,6,7]]));  //5040

//iterate with do while loops
 //do while loop will run at least once even if the condition is false
 var myarr = [];
 var i =10;
 do {
  myarr.push(i);
  i++;
 }while(i < 5)
 
 console.log(i,myarr); //11 [ 10 ]

 // o/p add(1,2)
//add (1)(2)

function add(a,b){
  if(a && b){
    return a+b;
  }else{
    return function (c){
      return a+c;;
    }
  }
}
console.log(add(1,2)); //3
console.log(add(1)(2)); //3

// find out the missing number in an array
const findMissing = num => {
  const max = Math.max(...num);
  const min = Math.min(...num);
  const missing = [];
  for(let i = min; i <= max; i++){
    if(!num.includes(i)){
      missing.push(i);
    }
  }
  return missing;
}
findMissing([1,15]);
console.log(findMissing([1,3,4,7,9,10,12,14,15])); //[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];