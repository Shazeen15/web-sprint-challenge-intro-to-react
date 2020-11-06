import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';

export default function CharacterDetails({characterId, close}){
    const [details, setDetails] = useState(null);

    let characterLinkWithId = `https://rickandmortyapi.com/api/character/${characterId}`;
    // use effect function
    const EffectFn = () => {
        axios.get(characterLinkWithId)
        .then((res) => {
            let CharList = res.data;
            console.log(CharList)
            setDetails(CharList);
        })
        .catch((err) => {
            return err;
        })
    }
    //useEffect()
    useEffect(EffectFn, [characterId])
    const nextPage = () => {
        
    }
    return (
        <div>
            <h2>Character Details</h2>
            {
                details &&
                <div>
                    <p>Name: {details.name}</p>
                    <p>Status: {details.status}</p>
                    <p>Species: {details.species}</p>
                    <p>Type: {details.type}</p>
                    <p>Gender: {details.gender}</p>
                </div>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}