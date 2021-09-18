import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  //const [ token, setToken ] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

//use effect hook ===> Run code based on given condition
  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("I HAVE A TOKEN >>>>>>>>>>>>", _token);
    if(_token){
     // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });

        dispatch({
          type: 'SET_TOKEN',
          token: _token,
        });
      });
    }
  }, []);

  console.log("😉 user details", user);
  console.log("👽 a token here", token);
  

  return (
    <div className="app">
      {
        token ? (
        <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  )
}

export default App
