/*function bubblesort(array) {
 let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i+1] = temp;
        swapped = true;

      }
    }
  }while(swapped);
}


const array = [8, 6 ,23 ,-6, 4, -2 ];
bubblesort(array);
console.log(array);*/

function bubblesort(arr){
  //let swapped;
  //do{
   // swapped = false;
   for(let j=0;j<arr.length - 1;j++){
  for(let i=0; i< arr.length - 1; i++){
      if(arr[i] > arr[i+1]){
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      //swapped = true;
      }

  }
//}while(swapped)
}
}
const arr = [ 7, 5, 4, 1, 2];
bubblesort(arr);
console.log(arr);


//swapping function
/*let a =5;
let b = 10;
console.log(a, b);
 let temp= a;
 a = b;
 b= temp;
 console.log(a, b);*/