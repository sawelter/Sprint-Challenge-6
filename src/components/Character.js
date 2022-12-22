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
    background-color: white;
    width: 50%;
`;
    

const Character = (props) => {

    const [homeworld, setHomeworld] = useState("");

    const character = props.character;
    const planets = props.planets;

    useEffect(() => {
        axios.get(character.homeworld)
            .then(res => {
                setHomeworld(res.data.name);
            })
            .catch(err => console.error(err));
    }, []);

    console.log(props.planets);
    return (
        <StyledCharacter>
            <h3>{character.name}</h3>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Weight: {character.mass}</p>
            <p>Eye color: {character.eye_color}</p> 
            <p>Hair color: {character.hair_color}</p>   
            <p>Birth year: {character.birth_year}</p>
            <p>Homeworld: {homeworld}</p>          
        </StyledCharacter>
    );
}

export default Character;