/*try {
  throw new error();
}catch(err){
  console.log(err); // output: error is not defined
}
console.log("This lines is run now" );

console.log(a+b);
console.log("This lines we never reach"); //output: a is not defined*/

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