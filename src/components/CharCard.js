import React from 'react';
import styled from 'styled-components';

const InfoCard = styled.div`
    display: flex;
    margin: 2%;
    padding: 2%;
    background: #95A068;
    border-radius: 10px;
`;

const Information = styled.section`
    margin: 5%;
    width: 100%;
`;

const P = styled.p`
    padding-top: 2%;
    color: #C9F3D2;
`;

const CharCard = ({characters}) => {
    console.log(characters.name)
    return (
        <InfoCard>
            <section>
                <img src={characters.image} alt=""/>
            </section>
            <Information>
                <P>Name: {characters.name}</P>
                <P>Status: {characters.status}</P>
                <P>Species: {characters.species}</P>
                <P>Type: {characters.type}</P>
                <P>Gender: {characters.gender}</P>  
            </Information>
            
        </InfoCard>
    )
}

export default CharCard;