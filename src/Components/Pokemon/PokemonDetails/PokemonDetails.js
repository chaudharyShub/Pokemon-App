import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PokemonDetails.css';

function PokemonDetails() {

    const { ID } = useParams();
    const navigate = useNavigate();

    const [pokemonObject, setPokemonObject] = useState({});
    const [myStyle, setMyStyle] = useState({ boxShadow: '0 0 0 white' })
    const [object, setObject] = useState({});

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`);
            const parseData = await data.json();
            setPokemonObject(parseData);
            const obj = {
                name: parseData.forms[0].name,
                image_front: parseData.sprites.front_default,
                image_back: parseData.sprites.back_default,
                type: parseData.types[0].type.name,
                weight: parseData.weight,
                moves: parseData.moves.slice(0, 6),
            }
            let a = obj.type
            let boxStyle = {}
            switch (a) {
                case a = 'fire':
                    boxStyle = { boxShadow: '10px 10px 5px rgba(206, 0, 0, 0.833)', backgroundColor: 'rgb(255, 167, 167)' }
                    break;
                case a = 'water':
                    boxStyle = { boxShadow: '10px 10px 5px rgba(0, 0, 235, 0.811)', backgroundColor: 'rgb(178, 206, 255)' }
                    break;
                case a = 'grass':
                    boxStyle = { boxShadow: '7px 7px 10px rgb(1, 180, 1)', backgroundColor: 'rgb(216, 255, 216)' }
                    break;
                case a = 'bug':
                    boxStyle = { boxShadow: '10px 10px 5px rgb(194, 194, 0)', backgroundColor: 'rgb(253, 253, 154)' }
                    break;
                case a = 'normal':
                    boxStyle = { boxShadow: '10px 10px 5px brown', backgroundColor: 'rgba(165, 42, 42, 0.511)' }
                    break;
                case a = 'poison':
                    boxStyle = { boxShadow: '10px 10px 5px purple', backgroundColor: 'rgba(255, 109, 255, 0.74)' }
                    break;
                default:
                    boxStyle = { boxShadow: '0 0 0 white', backgroundColor: 'rgb(216, 255, 216)' }
                    break;
            }
            setMyStyle(boxStyle);
            setObject(obj);

        } catch (error) {
            console.log(error);
        }
    }

    if (pokemonObject.abilities && pokemonObject.forms && pokemonObject.moves) {
        return (
            <div className='pokemon_details_container'>
                <div className="button_span">
                    <button onClick={() => navigate(-1)}>&larr; Back</button>
                    <span></span>
                </div>
                {
                    <div className='pokemon_details_inner' style={myStyle}>
                        <h1>{object.name.toUpperCase()}</h1>
                        <div className='pokemon_img_container'>
                            <img src={object.image_front} />
                            <img src={object.image_back} />
                        </div>
                        <p><strong>Type :</strong> {object.type[0].toUpperCase() + object.type.slice(1)}</p>
                        <p><strong>Weight:</strong> {object.weight} lbs.</p>
                        <p><strong>Moves:</strong> </p>
                        <ul className='moves_container'>
                            {
                                object.moves.map((moves, index) => {
                                    let pokemonMoves = moves.move.name[0].toUpperCase() + moves.move.name.slice(1);
                                    return (
                                        <li key={index}>{pokemonMoves}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        );
    }
    else {
        return <h1>Loading...</h1>
    }
}

export default PokemonDetails;
