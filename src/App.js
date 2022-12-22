import React, { useState, useEffect } from 'react';
import Character from "./components/Character.js"
import axios from "axios"
import { setupWorker, rest } from "msw";

const API_URL = "https://swapi.dev/api/people/";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it
  // should sync up with, if any.

  // Fetch characters
  useEffect(() => {
    axios.get(API_URL)
      .then( res => {
        setCharacters(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characters-container">
        {characters.map((element, index) =>  {
          return <Character character={element} planets={planets} key={index}/>
        })}
      </div>
    </div>
  );
}

export default App;





// useEffect for loop to get data person by person
 // const characterData = [];
    // for(let i = 1; i < dbLength; i++) {
    //   axios.get(`${API_URL}${i}`) // loops through and gets data person by person
    //   .then( results => {
    //     characterData.push(results.data); // make new array of data one element by one element
    //   })
    //   .catch(err => console.error(err));
    // }
    // console.log(characterData);
    // setCharacters(characterData); // store data in state
    // console.log(characters);