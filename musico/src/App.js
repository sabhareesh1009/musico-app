import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [ token, setToken ] = useState(null);

//use effect hook ===> Run code based on given condition
  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("I HAVE A TOKEN >>>>>>>>>>>>", _token);
    if(_token){
      setToken(_token);
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
         <h1>I am Logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  )
}

export default App
