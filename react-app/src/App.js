import logo from './logo.svg';
import './App.css';
//import Promo from './components/Promo';
//import Header from './components/Header';
//import Sidebar from './components/Sidebar';
//import Main from './components/Main';
//import ToggleBoolean from './components/ToggleBoolean';
//import pasta from './pasta.png';
import Card from './components/Card';

/*function Heading(){
  return (
  <h1>Hello World</h1>
  );
}*/

function Logo(props){
  const userPic = <img src = {pasta} />
  return userPic;
}



function App() {
  return ( 
    <div className="App"> 
      
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
          
        </div>

  );
}

export default App;
