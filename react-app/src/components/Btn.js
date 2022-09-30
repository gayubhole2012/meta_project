import React from 'react';

const clickHandler = 
() => console.log('Clicked');

function Btn(){
  return(
    <button onClick ={ clickHandler }>
         Click Me
        </button>
  );
}

export default Btn;