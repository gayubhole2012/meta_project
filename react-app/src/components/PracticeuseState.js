import React, { useState } from 'react';

/*function PracticeuseState(){
  const[age, setAge] = useState(21);
  const handleClick =() => setAge(age +9);

  return(
    <div>
    <h1>Today I am {age} </h1>
    <button onClick={handleClick}>Age</button>
   </div>
  )
  
}

export default PracticeuseState;*/

//assignment giftcard

/*import React, { useState } from 'react';

function PracticeuseState(){
  const [giftCard, setGiftCard] = useState(
    {
      firstName: "Gayatri",
      lastName: "Patil",
      text: "Free dinner for 4 guests",
      valid: true,
      instructions: "Please show this card at the time of payment",
  })

  function spendGiftCard(){
    setGiftCard(prevState =>{
      return{
        ...prevState,
        valid:false,
        text: "This card has been spent",
        instructions: "Please visit our restaurant to renew your gift card.",
      }
    });
  }

return(
  <div style = {{padding: '20px'}}>
    <h1>Gift Card</h1>
    <h2>Customer: {giftCard.firstName} {giftCard.lastName}</h2>
    <h3>{giftCard.text}</h3>
   <p>{giftCard.instructions}</p>
   {
    giftCard.valid && (
      <button onClick={spendGiftCard}>Spend Gift Card</button>
    )
   }
  </div>
)
 
}

export default PracticeuseState;*/



//assignment fetch data
/*import React, { useState } from "react";

function PracticeuseState() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));

  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name: {user.result[0].name.first}</h2>
      <img src ={user.result[0].picture.large} alt= "" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default PracticeuseState;*/

 function GoalForm(props){
  const [formData, setFormData] = React.useState({goal: "" , by: ""});

  function changeHandler(e){
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: "" , by: ""});

  }

return(
  <div>
    <h1>Little Lemon Goal</h1>
    <form onSubmit={submitHandler}>
    <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange= {changeHandler} />
    <input type="text" name="by" placeholder="By..."  value={formData.by} onChange={changeHandler}/>
    <button>Submit Goal</button>
    </form>
  </div>
)
}

function ListOfGoals(props){
  return(
    <ul>
      {props.allGoals.map((g)=> (
        <li key={g.goal}>
          <span>My Goal is to {g.goal} ,by {g.by} </span>
        </li>
      ))}
    </ul>
  );
}

export default function PracticeuseState(){
  const [allGoals,  updateAllGoals] = React.useState([]);
  
  function addGoal(goal){
    updateAllGoals([...allGoals, goal]);
  }
  return(
    <>
    <GoalForm onAdd={addGoal} />
    <ListOfGoals allGoals = {allGoals} />
   </>
  )
}


