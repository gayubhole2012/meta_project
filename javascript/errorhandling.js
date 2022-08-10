/*try {
  throw new error();
}catch(err){
  console.log(err); // output: error is not defined
}
console.log("This lines is run now" );

console.log(a+b);
console.log("This lines we never reach"); //output: a is not defined

try {
  console.log(a+b);
}catch(err){
  console.log(err);
  console.log("There an error");
  console.log("the error was saved in error log");
}
console.log("My program does not stop");

try {
  throw new ReferenceError();
}catch(err){
  console.log(err);   // output: ReferenceError
  console.log("there was an reference error");
}
console.log("My program does not stop");


// exercise
function addTwoNums(a,b){
  try{
      if( typeof(a) != 'number'){
          throw new ReferenceError('the first argument is not a number')
      }else if(typeof(b) != 'number'){
          throw new ReferenceError('the second argument is not a number');
      }
      console.log(a+b);
  }catch(err){
      console.log("Error!", err);
  }
  
}
addTwoNums(5,5); 
console.log("It still works");     // output: 10        It still works



function letterFinder(word, match) {
  var condition1 = typeof(word) == 'string' && word.length >= 2;
  var condition2 = typeof(match) == 'string' && match.length == 1;
  if(condition1 && condition2) {
      for(var i = 0; i < word.length; i++) {
          if(word[i] == match) {
              console.log('Found the', match, 'at', i)
          } else {
              console.log('---No match found at', i)
          }
      }
  } else {
      console.log("Please pass correct arguments to the function")
  }
}
letterFinder([],[])
letterFinder("cat","c")  //output: Please pass correct arguments to the function    Found the c at 0     ---No match found at 1      ---No match found at 2   

var result;
  console.log(result); //output: undefined */


try {
  Number(5).toPrecision(300)
  } catch(e) {
  console.log("There was an error")
  }

  var str = "Hello";
str.match("jello");