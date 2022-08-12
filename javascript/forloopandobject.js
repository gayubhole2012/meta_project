
//  for of loop cannot work on an object directly
/*const car = {
  color: 'red',
  speed: 100
}
for(prop of  car)
{
  console.log(prop);  //output:TypeError: car is not iterable
}*/

// Contrary to objects, arrays are iterable
const colors = ['red','pink','orange'];
for(var color of colors){
  console.log(color);
}