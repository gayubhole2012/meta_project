
//Did you assign the finalPrice variable conditionally (in one condition, multiplied by the tax, and in the other condition, with no tax multiplied)?
//Were you able to code the conditional statements for the value of the passed-in argument to the invoked getPrices() function?  
//Is your loop outputting all the objects' data from the dishData array?  


// Given variables
/*const dishData = [
  {
    name: "Italian pasta",
    price: 9.55
  },
  {
    name: "Rice with veggies",
    price: 8.65
  },
  {
    name: "Chicken with potatoes",
    price: 15.55
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45
  },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (dish of dishData) {
    let finalPrice;
    if (taxBoolean) {
      finalPrice = dish.price * tax;
    } else if (!taxBoolean) {
      finalPrice = dish.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
  }
}

//Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests == 'number' && guests > 0 && guests < 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests <= 10) {
      discount = 10;
    }
      console.log(`Discount is: $${discount}`);
  } else { 
       console.log("The second argument must be a number between 0 and 30");
   }
  
}
getDiscount(true, 2);
getDiscount(false, 10);      */





//var x = 0 != 1;

var x = 20;

if(x >= 10) {
    console.log("Apple");
} else if(x <= 5) {
    console.log("Pear");
} else {
    console.log("Orange");
}


var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);


try {
  throw new Error();
  console.log('Square');
} catch(err) {
  console.log('Circle');
}

function addTwo(a,b) {
  return a + b;
}
addTwo(5,"10")


var cat = {}
cat.sound = "meow"
var catSound = "purr"
console.log(cat.sound)


var veggies = []
veggies.push('parsley')
veggies.push('carrot')
console.log(veggies[2])

var x = 2;
x += 5;
console.log(x);


const a = true;
if(!a) {
    console.log("Green");
} else {
    console.log("Blue");
}