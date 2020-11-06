// Write your Character component here
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharCard from './CharCard'
import Header from './Header'
import CharacterDetails from './CharacterDetails'

const Character = (props) => {
    const [characters, setCharacters] = useState([]);
    const [currentCharacterId, setCurrentCharacterId] = useState("");

    const openDetails = (id) => {
        setCurrentCharacterId(id);
    };

    const closeDetails = () => {
        setCurrentCharacterId(null);
    };

    let characterLink = `https://rickandmortyapi.com/api/character/`;
    const EffectFn = () => {
        axios.get(characterLink)
        .then((res) => {
            let CharList = res.data.results;
            setCharacters(CharList);
        })
        .catch((err) => {
            return err;
        })
    }
    useEffect(EffectFn, [])

    // const nextPage = () => {
    //     characterLink = `https://rickandmortyapi.com/api/character/?page=2`
    // }
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
                {/* <button onClick={nextPage}>Next Page</button> */}
            </div>
            
        </div>
    )
}

export default Character;