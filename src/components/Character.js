import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Write your Character component here
    /** Properties include:
     *      name(str)        height(int)      mass(int)
     *      hair_color(str)  eye_color(str)   birth_year(str)
     *      films(str[])     homeworld(api)   skin_color(str)     
     *      species[{}]      starships(api)        vehicles(api)
     */

const StyledCharacter = styled.div`
    box-sizing: border-box;
    background-color: rgba(255,255,255,.5);
    border-radius: 10px;
    width: 60%;
    padding: 1%;
    margin-bottom: 1rem;
    font-family: Montserrat, sans-serif;


    h3 {
        text-align: left;
        padding-left: 5rem;
        font-size: 1.7rem;
        margin: 1rem;
    }

    .data-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .data-subcontainer {
        width: 45%;
    }

    h4 {
        background-color: gray;
        color: white;
        padding: 1%;
        margin: 1%;
    }

    p {
        border-bottom: 1px solid gray;
        padding: 1%;
        margin: 1%;
        text-align:left;
        padding-left: 20%;
    }

    p.no-bottom-border {
        border: none;
    }

    @media (max-width: 800px) {

        h3 {
            padding: 0;
            text-align: center;
        }
        .data-container {
            flex-direction: column;
        }

        .data-subcontainer {
            width: 100%;
        }

    }
`;
    

const Character = (props) => {

    const [homeworld, setHomeworld] = useState("");

    const character = props.character;

    useEffect(() => {
        axios.get(character.homeworld)
            .then(res => {
                setHomeworld(res.data.name);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <StyledCharacter>
            <h3>{character.name}</h3>
            <div className="data-container">
                <div className="data-subcontainer">
                    <h4>General Information</h4>
                    <p><b>Gender</b>: {character.gender === "male" ? "♂" : ""} {character.gender === "female" ? "♀" : ""} {character.gender}</p>
                    <p><b>Birth Year</b>: {character.birth_year}</p>
                    <p className="no-bottom-border"><b>Homeworld</b>: {homeworld}</p> 
                </div>
                <div className="data-subcontainer">
                    <h4>Physical Appearance</h4>
                    <p><b>Height</b>: {character.height} cm</p>
                    <p><b>Weight</b>: {character.mass} kg</p>
                    <p><b>Eye color</b>: {character.eye_color}</p> 
                    <p className="no-bottom-border"><b>Hair color</b>: {character.hair_color}</p>
                </div>
            </div>
              
                     
        </StyledCharacter>
    );
}

export default Character;