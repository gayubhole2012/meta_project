//parent class is Dog and child class is puppy
import React from 'react';
import Bowl from './Bowl';

function Puppy(props){
  return(
    <div>
      {props.name} has <Bowl bowlshaped="square" bowlstatus="full"/>
    </div>
  )
}

export default Puppy;

