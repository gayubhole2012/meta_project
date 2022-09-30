//parent class

import React from 'react';
import Puppy from './Puppy';

function Dog(props){
  return(
    <Puppy name="Max" bowlshaped="square" bowlstatus="full"/>
  );
}

export default Dog;