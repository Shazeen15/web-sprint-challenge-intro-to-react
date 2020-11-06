import React from 'react';
import styled from 'styled-components';



const CharCard = ({characters, action}) => {

    return (
        <div>
            {/* <ImgSection>
                <Img src={characters.image} alt=""/>
            </ImgSection> */}
            <div>
                <p>Name: {characters.name}</p>
                <button onClick={() => action(characters.id)}>See details</button>
            </div>
            
        </div>
    )
}

export default CharCard;