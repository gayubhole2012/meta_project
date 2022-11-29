
// Updating the state object using arrow functions

/*import React from 'react';
import { useState } from 'react';

function UseStateHook(){
  const [greeting, setGreeting]= useState ({
    greet: 'Hello',
    place: 'world'
  });
  console.log(greeting,setGreeting);

  function updateGreeting(){
      setGreeting(preState=>{
        return{...preState, place:'React'}
      });
  }
  
  return(
    <div>
    <h1>{greeting.greet},{greeting.place}</h1>
    <button onClick={updateGreeting}>submit</button>
    </div>
  )
}

export default UseStateHook;*/


//The correct way to update the state object in React when using useState

import React from 'react';
import { useState } from 'react';

function UseStateHook(){
  const [greeting, setGreeting] = useState({greet: 'Hello World'});
  console.log(greeting, setGreeting);

  function updateGreeting(){
    const newGreeting ={...greeting}
    newGreeting.greet = 'Hello React';
    setGreeting(newGreeting);
  }
return(
  <div>
    <h1>{greeting.greet}</h1>
    <button onClick={updateGreeting}>update greet</button>
  </div>
)
}
export default UseStateHook;