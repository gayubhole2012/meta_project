//import React, { Component } from 'react';
import React, {useState} from 'react';

//class component
/*class ClassCounter extends Component{
  constructor(props){
    super(props);

    this.state = {
      count : 0
    }
  }
    incrementCounter = () => {
      this.setState({
        count: this.state.count + 1
      });
    }
    render(){
      return(
        <div>
          <button onClick={this.incrementCounter}> Count {this.state.count}</button>
        </div>
      );
    }
  }

export default ClassCounter;*/

//function component

function ClassCounter(){
  const [count , setCount] = useState(0);
  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default ClassCounter;
