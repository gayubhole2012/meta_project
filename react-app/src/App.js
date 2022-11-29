import logo from './logo.svg';
import './App.css';
//import UseStateHook from './components/UseStateHook';
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
//import React, { useState } from 'react';
//import MealsProvider from './providers/MealsProvider';
//import MealsList from './components/MealsList';
//import Counter from './components/Counter';
//import AboutMe from './AboutMe';
//import HomePage from './HomePage';
//import { Routes, Route,Link} from 'react-router-dom';
//import rooftops from './assets/Images/roof-top.jpeg';
//import ReactPlayer from 'react-player';
//import Calculator from './components/Calculator';
//import Map from './components/Map';
//import MapAssignment from './components/MapAssignment';
 //import Registration from './components/Registration';
//import ClassCounter from './components/ClassCounter';
//import HookObject from './components/HookObject';
//import HookArray from './components/HookArray';
//import PracticeuseState from './components/PracticeuseState';
//import { useEffect, useState } from 'react';
//import UseEffect from './components/UseEffect';
import FetchData from './components/FetchData';


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



// primitive values - passed by value - number, string, boolean
// pass by reference - array, object
// memeory [{ name: 'swap' }][][][][][][][{ name: 'swap' }] 

function App(){

  return (
  <div className="App">

<FetchData />
      {/*<UseStateHook/>*/}
    {/*<UseEffect />*/}
 {/*<PracticeuseState />*/}
    {/*<HookArray />*/}
     {/*<HookObject/>*/}
    {/*<ClassCounter/>*/}
   {/*<Registration />*/}
    {/*<MapAssignment />*/}
{/*<Map />*/}

  
{/*const url = "https://www.youtube.com/watch?v=ysz5S6PUM-U";
  return(
    <div className="App">
      <h1>React Video Player</h1>
      <ReactPlayer
      url={vidurl}
      playing={false}
      volume={0.5}
  />*/}


  
  
  
  {/*const randomImageUrl = "https://picsum.photos/200/300";
  return ( 
    <div className="App"> 
<h1>Three images with some styling</h1>
<img
     height={200}
     src={rooftops}
     alt="An image of a NewYork"
     />

     <img
     height={200}
     src={require("./assets/Images/roof-top.jpeg")}
     alt="an image of a NewYork"
     />
     <img
     src={randomImageUrl}
     height={200}
      alt="an image of a NewYork"
  />   */}

  {/*const time= new Date();
  const day = time.toLocaleDateString("en-US", {weekday: "long"});
  const morning = time.getHours() >=6 && time.getHours() <= 19;
  let dayMessage;

  if(day.toLowerCase() === "monday"){
    dayMessage =`Happy ${day}`;
  }else if (day.toLowerCase() === "tuesday"){
    dayMessage =`${day}, four days to go`;
  }else if (day.toLowerCase() === "wednesday"){
    dayMessage =`${day}, half way there`;
  }else if (day.toLowerCase() === "thursday"){
    dayMessage =`${day},start planning the weekend`;
  }else if (day.toLowerCase() === "friday"){
    dayMessage =`${day}, woo-hoo weekend coming!`;
  }else{
    dayMessage= "Stay clam and keep having fun";
  }
  return ( 
    <div className="App"> 
      <h1> {dayMessage}</h1>
  {morning ? <h2>Have you had breakfat yet?</h2> : ''} */}

    {/*<nav className="nav">
    <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        
      </nav>
      <Routes>
      <Route path ="/" element={<HomePage/>} />
      <Route path ="/about-me" element={<AboutMe/>} />
  </Routes>*/}
    {/*<MealsProvider>
      <MealsList />
      <Counter />
  </MealsProvider>*/}
    
    
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
