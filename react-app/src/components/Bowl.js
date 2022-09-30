// bowl is grandchild of Dog
import React from 'react';

function Bowl(props){
  return(
    <span>
      {props.bowlshaped}  -shaped bowl,  and it's currently  {props.bowlstatus}
    </span>
  );
}

export default Bowl;