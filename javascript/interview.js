// cut array of length
/* let data = [2,4,5,8,3,8,1];
  data.length = 5;
  console.log(data);  // [2,4,5,8,3]*/

// sum of array 

 /*let data = [3,5,7,4,9,2,5,6];
 let sum = data.reduce((a,b)=> a+b);
 console.log(sum); //41*/

 
 //remove duplicates from array
 /*let data = [3,5,7,4,9,2,5,6,3,5,7,4,9,2,5,6];
let duplicate = new Set(data);
//console.log(duplicate); //Set(6) {3, 5, 7, 4, 9, 2} but this output is not an array so we need to convert it to array.
                          //we use destructuring to convert it to array using '...'
console.log([...duplicate]); //[ 3, 5, 7, 4, 9, 2]*/


//comma operator
/*let a =10;                
//a= (a++,a);  //11
a=(a++, 5);   //5
a=(a++,a++,a); //12
console.log(a); */

// swap the values of two variables using destructuring
/*let x=20 , y=30;
[x,y] = [y,x];
console.log(x,y); //30 20*/

//bubble sort normal function
/*function bubblesort(arr){                                    
  for(let j=0; j<arr.length - 1; j++){                         
  for(let i=0; i < arr.length-1; i++){
    if(arr[i] > arr[i+1]){
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] =temp;
    }
  }
}
}
const arr = [ 7, 5, 4, 1, 2];
bubblesort(arr);
console.log(arr);  // [1, 2, 4, 5, 7]*/

//bubble sort using do while
/*function bubblesort(arr){
  let swapped;
  do{
   swapped = false;
  for(let i=0; i<arr.length - 1; i++){
    if(arr[i] > arr[i+1]){
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] =temp; 
      swapped = true;
    }
  }
}while(swapped)
}
const arr = [ 7, 5, 4, 1, 2];
bubblesort(arr);
console.log(arr) // [1, 2, 4, 5, 7]*/

//fiboacchi series without recursive function

/*function fiboacchi(n){
  let prev = 1;
  let curr =1;
  for(i=2; i < n; i++){
    let next = prev + curr;
    prev =curr;
    curr = next;
  }
  return curr;
}
console.log(fiboacchi(5)); //5*/

//fiboacchi series using recursive function

/*function fibboachi(n){
 {
    if (n < 2){
      return n;
    }
    return fibboachi(n - 1) + fibboachi (n - 2)
  }
}

console.log(fibboachi(6));*/

/*console.log({} + []);//[object Object]*/


//interpolation
/*let one = 1;
let two = 2;

let sum = `adding ${one} and ${two} gives me ${one + two}`;
console.log(sum); //adding 1 and 2 gives me 3*/

//tagged template literals
  /*let one = 1;
  let two = 2;
  let tagged = function(strArray , ...values){
    console.log(strArray); //["adding ", " and ", " gives me ", ""]
    console.log(values); //[1, 2, 3
  }

  tagged`adding ${one} and ${two} gives me ${one + two}`;  //[ 'adding ', ' and ', ' gives me ', ''  ] [ 1, 2, 3 ]
  */

//FizzBuzz program

/*function fizzbuzz(num){
  for(let i = 1; i <= num; i++){
    if(i%3 === 0 && i % 5 === 0 )console.log('FizzBuzz');
     else if(i % 3 === 0) console.log('Fizz');
    else if(i % 5 === 0 ) console.log('Buzz');
    else console.log(i);
    }
  }

  fizzbuzz(15);
  console.log(fizzbuzz); //1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz*/


  // Sring rotation   ABCD to BCDA

  /*var rotatestring = function (A, B)
  {
    if(A.length !== B.length)
    return false;
    if(A.length === 0 && B.length === 0)
      return true;
     A =A + A   ////ABCDABCD string concatination
    return A.includes(B);     //include METHODE USING ES6
  }

  console.log(rotatestring('ABCD','BCDA')); //true   
   console.log(rotatestring('ABCD','ACBD')); //false
console.log(rotatestring('abcde','cdeab')); //true*/

