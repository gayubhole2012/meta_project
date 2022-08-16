/*export const informalGreeting = (person) => {
  console.log(`Hello ${person}`);
}

export const formalGreeting = (person) => {
  console.log(`Good Day ${person}`);
}

const greeting = () => {
  console.log(`Howdy`);
}

export default greeting;*/


//assignemnt week 3 last module ques

/*function scopeTest() {
  var y = 44;

  console.log(x);
}

var x = 33;
scopeTest(); // 33 */


/*class Cake {
  constructor(lyr) {
      this.layers = lyr;
  }

  getLayers() {
      return this.layers;
  }
}

class WeddingCake extends Cake {
  constructor() {
      super(2);
  }

  getLayers() {
      return super.getLayers() * 5;
  }
}

var result = new WeddingCake();
console.log(result.getLayers()); // 10 */


/*class Animal {

}

class Dog extends Animal {
    constructor() {
      super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise()); // growl */


/*const  [a, b]  =  [1,2,3,4] ;
console.log(b); //2*/


/*function count(...food) {
  console.log(food.length)
}

count("Burgers", "Fries", null); //3*/


const letter = "a";
letter = "b"; // Assignment to constant variable.