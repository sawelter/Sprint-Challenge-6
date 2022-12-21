import React, { useState, useEffect } from 'react';
import Character from "./components/Character.js"
import axios from "axios"
import { setupWorker, rest } from "msw";

const API_URL = "https://swapi.dev/api/people/";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it
  // should sync up with, if any.

  useEffect(() => {
    axios.get(API_URL)
      .then( results => {
        setCharacters(results.data);
      })
      .catch(err => console.error(err));
  }, []);

// // 2. Describe network behavior with request handlers.
// const worker = setupWorker(
//   rest.get(API_URL, (req, res, ctx) => {
//     return res(
//       ctx.delay(1500),
//       ctx.status(202, 'Mocked status'),
//       ctx.json({
//         message: 'Mocked response JSON body',
//       }),
//     )
//   }),
// )

// // 3. Start request interception by starting the Service Worker.
// worker.start()


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((element, index) =>  {
        return <Character character={element} key={index}/>
      })}
    </div>
  );
}

export default App;
