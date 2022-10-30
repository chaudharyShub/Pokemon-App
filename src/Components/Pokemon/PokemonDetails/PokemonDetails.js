import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PokemonDetails.css';

function PokemonDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [pokemonObject, setPokemonObject] = useState({});
    const [object, setObject] = useState({});
    const [background, setBackground] = useState({});

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const parseData = await data.json();
            setPokemonObject(parseData);
            setBackground(parseData.sprites.other.home.front_default);
            const obj = {
                name: parseData.forms[0].name,
                image_front: parseData.sprites.other.dream_world.front_default,
                type: parseData.types[0].type.name,
                weight: parseData.weight,
                moves: parseData.moves.slice(0, 6),
            }
            setObject(obj);

        } catch (error) {
            console.log(error);
        }
    }

    if (pokemonObject.abilities && pokemonObject.forms && pokemonObject.moves) {
        return (
            <div className='pokemon_details_container' style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                backgroundColor: 'gray',
            }}>
                <div className="button_span">
                    <button onClick={() => navigate(-1)}>&larr; Back</button>
                    <span></span>
                </div>
                {
                    <div className='pokemon_details_inner'>
                        <h1>{object.name.toUpperCase()}</h1>
                        <div className='pokemon_img_container'>
                            <img src={object.image_front} />
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
