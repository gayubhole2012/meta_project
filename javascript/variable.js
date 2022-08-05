//   Variable      

/*var petDog="Rex";
var petCat="Pepper";
var catSound="purr";
var dogSound="woof";
catSound="meow";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is:",petDog);
console.log("My pet cat's name is:",petCat);
console.log(petDog,"says",dogSound);
console.log(petCat,"says",catSound);
console.log(petCat,"now says",catSound);*/


// Operator
/* Arthmatic operator
 +,-,*, / 
 comparision operator
 < , > , ==
 logical operator
 &&, ||, !=
*/

/*var currentTime = 10;
console.log(currentTime > 9 && currentTime < 15);
currentTime;*/

/*var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);*/

/*var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);

console.log(22%3);

console.log(5 !== "5") // output:true
console.log(5 !== 5)   //output: false

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // output:Once upon a time...

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // output:9

var score = 8;
console.log("Mid-level skills:",score>0 && score<10); // output: Mid-level skills: true".

var timeRemaining = 0;
var energy = 10;
console.log("Game Over",timeRemaining ==0 || energy ==0); // output: Game Over: true

var num1=2;
var num2= 5;
var test1= num1%2;
var test2= num2%2;
var result1= test1==0;
var result2= test2==0;
console.log("Is",num1, "an even number?", result1);
console.log("Is",num2, "an even number?",result2); // output: Is 2 an even number? true
                                                              //Is 5 an even number? false


var now ="Now in";
var three=3;
var d="D!";
console.log(now + three  +  d); // output: Now in3D!

var counter = 0;
counter+= 5;
counter+= 3;
console.log(counter);  // output: 8  */


//       conditional statement

var result = 50;
if(result > 40){
  console.log("you passed test");
}else{
  console.log("You are not passed test");
}  //output: you passed test

var place = "first";
if(place == "first"){
  console.log("Gold");
} else if(place == "second"){
  console.log("silver");
}else if(place == "third"){
  console.log("bronze");
}
else{
  console.log("no medal");
}      // output:Gold

var place= 'fifth';
switch(place) {
  case 'first' :
  console.log('Gold');
  break;
  case 'second' :
    console.log('silver');
    break;
    case 'third':
      console.log('bronze');
      break;
      default:
        console.log('No medal');
    }      // output:No medal


    var age = 45;
    if(age >= 65){
        console.log("You get your income from your pension");
    } else if(age < 65 && age >=18){
        console.log("Each month you get a salary.");
    } else if(age > 18){
        console.log("You get an allowance.");
    }else{
        console.log("The value of the age variable is not numerical");
    }  //output: Each month you get a salary.
    
    var day = 'hghg';
    switch(day) {
        case 'Monday':
        console.log('Do Something');
        break;
        case 'Tuesday':
        console.log('Do Something');
        break;
        case 'Wednesday':
        console.log('Do Something');
        break;
        case 'Thursday':
        console.log('Do Something');
        break;
        case 'Friday':
        console.log('Do Something');
        break;
        case 'Saturday':
        console.log('Do Something');
        break;
        case 'Sunday':
        console.log('Do Something');
        break;
        default:
        console.log('There is no such day');
    
    } // output:There is no such day