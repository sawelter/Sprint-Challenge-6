import styled from "styled-components"

// Write your Character component here
    /** Properties include:
     *      name(str)        height(int)      mass(int)
     *      hair_color(str)  eye_color(str)   birth_year(str)
     *      films(str[])     homeworld(api)   skin_color(str)     
     *      species[{}]      starships(api)        vehicles(api)
     */


    

const Character = (props) => {
    return (
        <div>
            <p>{props.character.name} was born in {props.character.birth_year}</p>
        </div>
    );
}

export default Character;