// Write your Character component here
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharCard from './CharCard'
import Header from './Header'
import CharacterDetails from './CharacterDetails'

const Character = (props) => {
    const [characters, setCharacters] = useState([]);
    const [currentCharacterId, setCurrentCharacterId] = useState("1");

    const openDetails = (id) => {
        setCurrentCharacterId(id);
    };

    const closeDetails = () => {
        setCurrentCharacterId(null);
    };

    const EffectFn = () => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then((res) => {
            let CharList = res.data.results;
            setCharacters(CharList);
        })
        .catch((err) => {
            return err;
        })
    }
    useEffect(EffectFn, [])

    return (
        <div>
            <Header/>
            <div>
                {characters.map(
                    (char) => {
                        return <CharCard key={char.id} characters={char} action={openDetails}/>
                    }
                )}
                {currentCharacterId && (
                <CharacterDetails characterId={currentCharacterId} close={closeDetails} />
                )}
            </div>
            
        </div>
    )
}

export default Character;