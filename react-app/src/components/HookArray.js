import React, { useState } from 'react';

/*  const [items, setItems] = useState([]);
  
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  return (
    <div>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )

}
export default HookArray;*/


//theme 

/*import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};*/


/*function HookArray(){
  const [car,setCar] = useState({
    brand: "BMW",
    model: "X5",
    year: "2022",
    color: "Royal Blue",
  
  });

  const updateColor = () =>{
    setCar(a =>{
     return{...a, color: "White", year: "2023"}
    });
}
  return(
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from{car.year}</p>
      <button type="button" onClick = {updateColor}>White</button>
    </div>
  )
}

export default HookArray;*/

function HookArray(){
  const[name, setName] = useState('Gayatri')
  const[age, setAge] = useState(21);
  const[skill,setSkill] = useState('JavaScript')

  const handleClick = () => {
    setName('Swapnil');
    setAge(32);
    setSkill('React');

  }


return(
  <div>
    <h2>HomePage</h2>
    <p>{name} is {age} yeal old learn {skill} </p>
    <button onClick= {handleClick}>Click Me</button>
  </div>
)
}
export default HookArray;
