var a;    //*declare a variable
var b= 4; //*assign value of a vaiable.   var b is declare variable and 4 is initilized the assignment operator = is assignmnet operator
console.log(a); // undefined
console.log(b);//4
a=7;
console.log(a);//7

//initialize a variable
var a=5;
var b=9;
var c="I am a";

a= a+1;
b=b+5;
c = c + " String";
console.log(a); //6
console.log(b); //14
console.log(c);  //I am a String

//case sensitive in varable
var caseSensitive;
var camelCase = 7;
//CaMelCase = 8;
//console.log(CaMelCase); //reference error because camelCase is not defined and capitilization matters
console.log(camelCase);  //7

//add,substract,multiply,divide two number 
var sum = 10+ 10;
var diff = 34 - 25;
var times = 6 * 7;
var divide = 45/ 15;
console.log(sum); //20
console.log(diff); //9
console.log(times); //42
console.log(divide);//3

//increment and decrement
var myVar = 11;
var myVar1 = 9;
myVar++;
myVar1--;
console.log(myVar); //12
console.log(myVar1); //8

//decimal number and multiply,divide decimal number
var myDecimal = 5.7;
console.log(myDecimal); //5.7
var product = 2.0 * 2.5;
console.log(product); //5
var quotient = 4.4 / 2.0;
console.log(quotient); //2.2

// remainder
var remainder;
remainder = 11 % 3;
console.log(remainder); //2
 
//even band odd number check 
function evenOdd(num){
  if(num % 2 === 0){
    return "even";
  }
  else{
    return "odd";
  }
}
console.log(evenOdd(5)); //odd
console.log(evenOdd(6)); //even

//compound assignment with augmented addition,substraction,multiplication,division
var a = 4;
var b = 6;

a = a + 12; //instead of this you can write a += 12
b = 17 + b;  //instead of this you can write b += 17
a -= 12; 
b *= 17;
a /= 12
console.log(a); //16
console.log(b); //23

//declare string variable
var firstName = "Gayatri";
var lastName = "Kumari";
console.log( firstName  +  lastName ); //GayatriKumari

//escape literal quotes in string
//var myStr = "I am a "double quoted" "string inside "double quotes"."; //error it menas escape literal quotes in string
var myStr = "I am a \"double quoted\" \"string inside \"double quotes\"."; //you need to put backslash before double quotes
console.log(myStr); //I am a "double quoted" "string inside "double quotes".

//concatenate string with plus operator
var myStr = " This is the start. " + "This is the end.";
console.log(myStr); // This is the start.  This is the end.

//concatenate string with plus equals operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr); //This is the first sentence.  This is the second sentence.

//constructing string with variables
var myName = "Gayatri";
var myStr = "My name is " + myName + " and I am well!"; //concatenate string with plus operator
console.log(myStr); //My name is Gayatri and I am well!

//string length
var firstNameLength = 0;
var firstName = "Gaytari";
firstNameLength = firstName.length;
console.log(firstNameLength); //7

//bracket notation to find first second character in string
var myName = "Gayatri";
var letterOfName = myName[5];
console.log(letterOfName); //r

//string are immutable
myStr = "jello World";
myStr[0] = "H"; //error because string are immutable insted of this you can write myStr = "Hello World";

//bracket notation to find last character in string
var myName = "Gyatri Patil";
var lastLetterOfName = myName[myName.length -1];
console.log(lastLetterOfName); //l

//store multiple values on array
var myArray = ["Gayatri", 23];
console.log(myArray); //["Gayatri", 23]

//nested array
var myArray = [["Gayatri", 23], ["Patil", 24]];
console.log(myArray); //[["Gayatri", 23], ["Patil", 24]]

//modifies array data with index 
var myArray = [18, 64, 99];
myArray[2] = 45;
console.log(myArray); //[18, 64, 45]

//multidimensional array
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var ourArray = myArray[2][2];
console.log(ourArray); //9

//manipulate arrays with push
var myArray = ["GAyatri" ,"Patil","Is Good Girl"];
myArray.push(["Happy", "Coding"]);
console.log(myArray); // [ 'GAyatri', 'Patil', 'Is Good Girl', [ 'Happy', 'Coding' ] ]

//manipulate arrays with pop
var myArray = ["GAyatri" ,"Patil"];
var removedFromMyArray = myArray.pop();  //remove last element from array
console.log(myArray); // [ 'GAyatri' ]

//manipulate arrays with shift()
var myArray = ["Swapnil", "Patil"];
var firstItemRemoved = myArray.shift();   //Shift() removes the first element from an array and returns that element.
console.log(myArray); // [ 'Patil' ]  

//manipulate arrays with unshift()
var myArray = [["Swapnil", "Patil"], ["Gayatri", "Patil"]];
var firstItemRemoved = myArray.unshift(["Happy", "Coding"]);   //unshift() adds an element to the beginning of an array and returns the new length of the array.
console.log(myArray); // [ [ 'Happy', 'Coding' ], [ 'Swapnil', 'Patil' ], [ 'Gayatri', 'Patil' ] ]

//reusable code with function
function reusableFunction(){
  console.log("Hi World");
}
reusableFunction(); //Hi World

//passing value to function with arguments
function functionWithArgs(a,b){
  console.log(a - b);
}
functionWithArgs(10,5); //5

//global scope and function
var myGlobal = 10; //global scope
function fun1(){
 oppGlobal = 5;
}
function fun2(){
  var output = "";
  if(typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oppGlobal != "undefined"){
    output += "oppGlobal: " + oppGlobal;
  console.log(output);
}
}
fun1();
fun2();  //myGlobal: 10oppGlobal: 5

//local scope and function
function myLocalScope(){
  var val = 5; //local scope we cant acces variable outside of function
  console.log(val);
}
myLocalScope(); //5
console.log(val); //error val is not defined

//