import React from 'react';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

export const MapAssignment = (props) => {
  const lowCaloriesDesserts = props.data
  .filter((desserts) => {
    return desserts.calories < 500;
  })
  .sort((a, b) => {
    return a.calories - b.calories;
  })
  .map((desserts) => {
    return (
      <li>
        {desserts.name} - {desserts.calories} cal
      </li>
    );
  });

return <ul>{lowCaloriesDesserts}</ul>;
}
 
    /*const lowCalories =  desserts.map((cal) => {
     const item = `${cal.name} - ${cal.calories}`
      return <li>{item}</li>
   })
 
    return(
      <div>
        <ul>
          {lowCalories}
        </ul>
        </div>
    )*/

    /*.filter((desserts) => {
      return desserts.calories > 500;
    })
    .sort((low, high) => {
      return low.calories - high.calories;
    })*/
   
  
  // Implement the component here.



