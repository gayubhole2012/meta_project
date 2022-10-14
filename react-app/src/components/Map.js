import React from 'react';

const data = [
  {
    id: 1,
    title: 'Teramasu',
    description: 'Teramasu is a Japanese dessert made with sweetened condensed milk, eggs, and sugar.',
    image: 'https://www.justonecookbook.com/wp-content/uploads/2018/05/teriyaki-chicken-recipe-1.jpg',
    price: '$10',
  },
  {
    id: 2,
    title: 'Teriyaki Chicken',
    description: 'Teriyaki Chicken is a Japanese dish made with chicken, soy sauce, and sugar.',
    image: 'https://www.justonecookbook.com/wp-content/uploads/2018/05/teriyaki-chicken-recipe-1.jpg',
    price: '$15',
  },
  {
    id: 3,
    title: 'Takoyaki',
    description: 'Takoyaki is a Japanese snack made with octopus, tempura scraps, and wheat flour.',
    image: 'https://www.justonecookbook.com/wp-content/uploads/2018/05/teriyaki-chicken-recipe-1.jpg',
    price: '$20',
  },
];

/*const topdessert = data.map(dessert => {
  return {
   content: `${dessert.title} - ${dessert.description}`,
   price: dessert.price,
  }
})


export default function Map() {
  console.log(topdessert);
  return (
      <h1>Examine the console output</h1>
  );
}
*/

function Map(){
  const topdessert = data.map(dessert => {
  const item = `${dessert.title} - ${dessert.price}`
  return <li>{item}</li>  
})
  return (
    <div>
      <ul>
        {topdessert}
      </ul>
    </div>
  )
  }
export default Map;
