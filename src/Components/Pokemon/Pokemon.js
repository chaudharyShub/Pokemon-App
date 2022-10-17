import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pokemon.css';

function Pokemon() {

    const navigate = useNavigate();
    const [pokemonArray, setPokemonArray] = useState([]);
    const [paginationVariable, setPaginationVariable] = useState(1)
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        getData();
    }, [offset]);

    async function getData() {
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${20}`, {
                method: 'GET',
            });
            const parseData = await data.json();
            setPokemonArray(parseData.results);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='pokemon_main'>
            <h1>PokeDex</h1>
            <div className='btn_container'>

                <button
                    onClick={() => {
                        setPaginationVariable(prevState => prevState - 20);
                        setOffset(prevState => prevState - 20);

                    }}
                    disabled={!offset}
                >&larr; Previous</button>

                <button
                    className='btn_class'
                    onClick={() => {
                        setPaginationVariable(prevState => prevState + 20);
                        setOffset(prevState => prevState + 20);
                    }}
                >Next &rarr;</button>

            </div>
            <div className='pokemon_inner_container'>
                {
                    pokemonArray.length > 0 && pokemonArray.map((items, index) => {
                        return (
                            <div key={items.url} className='pokemon_items_container'>
                                <h3>{items.name.toUpperCase()}</h3>

                                <button
                                    onClick={() => {
                                        navigate(`/pokemon-details/${index + paginationVariable}`);
                                    }}
                                >More details...
                                </button>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Pokemon;
