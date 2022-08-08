/*function add(){ //function without parameter
  var a= 10;
  var b = 20;
  var c = a + b;
 console.log(c);
}
add(); // output :30



function num(a,b){
  var c = a + b;
  console.log(c);
}
num(3,5); // output :8

// arraay

var train =["wheat","barley","salt","rocks","vegetable"];
console.log(train[2]); //output: salt

function arrayListItems(arr){
  for(var i=0; i<arr.length; i++){
    console.log(i,arr[i]);
  }
}
var colors=["red","pink","white","green","orange","blue","black"];
arrayListItems(colors);   //output: 0 red 1 pink 2 white 3 green 4 orange 5 blue 6 black*/


function listArrayItems(arr) {
  
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] == 'red') {
          console.log(i*100, "tomato!")
      } else {
          console.log(i*100, arr[i])
      }
  }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //output: 0 tomato! 100 orange 200 yellow 300 green 400 blue 500 purple 600 pink


function letterFinder(word,match){
  for(var i=0; i<=word.length; i++){
      if(word[i]== match){
       console.log('Found the', match, 'at', i)
      }else{
          console.log('---No match found at', i)
      }
     
  }
}
letterFinder("test","t"); //output:Found the t at   ---No match found at 1    ---No match found at 2     Found the t at 3      ---No match found at 4