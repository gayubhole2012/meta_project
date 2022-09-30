import logo from './logo.svg';
import './App.css';
//import InputComponent from './components/InputComponent';
//import Promo from './components/Promo';
//import Header from './components/Header';
//import Sidebar from './components/Sidebar';
//import Main from './components/Main';
//import ToggleBoolean from './components/ToggleBoolean';
//import pasta from './pasta.png';
//import Card from './components/Card';
//import Btn from './components/Btn';
//import ModeToogler from './components/ModeToggler';
//import Dog from './components/Dog';
//import State from './components/State';
import React, { useState } from 'react';
import MealsProvider from './providers/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';


// prop drilling concept    

{/*function Main(props){
  return <Header msg= {props.msg} />
}

function Header(props){
  return(
    <div styles={{ border: "10px solid whitesmoke "}}>
      <h1>Header here</h1>
      <Wrapper msg={props.msg} />
    </div>
  );
}

function Wrapper(props){
  return(
    <div styles= {{
      border: "10px solid lightgrey"}}>
      <h2>Wrapper here</h2>
      <Button msg={props.msg}/>
    </div>
  )
}

function Button(props){
  return(
    <div styles= {{border: "20px solid orange"}}>
      <h3>This is Button component</h3>
      <button onClick={() => alert(props.msg)}>Click me</button>
       </div>
  );
}*/}

/*function Heading(){
  return (
  <h1>Hello World</h1>
  );
}*/

/*function Logo(props){
  const userPic = <img src = {pasta} />
  return userPic;
}*/



function App() {
  return ( 
    <div className="App"> 
    <MealsProvider>
      <MealsList />
      <Counter />
    </MealsProvider>
    
    
    {/*<Main msg="I passed through the Header and the Wrapper and I reached the Button component"/>*/}
  
  {/*const [word,setWord] = React.useState('Eat');

  function handleClick(){
  setWord('Drink');
}
  return ( 
    <div className="App"> 
    <State message={ word  +  "at little lemon"}/>
  <button onClick={handleClick}>Click me</button>*/}
    
    {/*<Header name="Anna" color="purple"/>
      <Main greet="Howdy"/>
      <Sidebar greet="Hi"/>
    
    
      <ToggleBoolean
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
  str={str1 + ' another ' + 'string'}/>*/}
         {/* <h1>Hello World</h1>
            <Logo />*/}

       {/*<h1>Task: Add three Card elements:
        <Card h2="First card's h2" h3="First card's h3" /> 
        <Card  h2="Second card's h2" h3="Second card's h3"/> 
        <Card  h2="Third card's h2" h3="Third card's h3"/>
          </h1>*/}

           {/*<Btn />*/}


           {/*<ModeToogler/>*/}
             {/*<Dog/>*/}
            {/*<InputComponent/>*/}

      
        </div>

  );
}

export default App;
