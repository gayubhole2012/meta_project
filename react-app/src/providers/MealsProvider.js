import React from 'react';
import  { useState } from 'react';


  const MealContext = React.createContext();
  const todaysmeals = [ "Baked Beans" , "Baked Sweet Potatoes", "Baked Potatoes" , "Baked chicken" ];

  const MealsProvider = ({ children }) => {

  const [meals, setMealsList] = useState(todaysmeals);
  return(
    <MealContext.Provider value={{meals}}>
      {children}
      </MealContext.Provider>
  )
  }
export const useMealsListContext = () => React.useContext(MealContext);
export default MealsProvider;