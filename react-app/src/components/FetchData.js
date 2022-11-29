import React from 'react';
import Recat, { useEffect } from 'react';


function FetchData(){
  const [user, setUser] = React.useState([]);

  const fetchData = ()=> {
     fetch('https://randomuser.me/api/?result=1')
      .then(response => response.Json())
      .then(data => setUser(data));
  }
      React.useEffect=(() =>{
        fetchData();
      },[]);
    
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Fetch Data</h1>
      <h2>firstName: {user.result[0].name.first}</h2>
      <h2>lastName: {user.result[0].name.last}</h2>
      </div>
      ):(
      <h1>data pending</h1>
  );
  }

  export default FetchData;