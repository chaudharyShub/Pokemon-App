import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NextAndPrevious from '../NextAndPrevious/NextAndPrevious';
import './Pokemon.css';

function Pokemon({ searchValue }) {

    const navigate = useNavigate();
    const [pokemonArray, setPokemonArray] = useState([]);
    const [pokemonArray2, setPokemonArray2] = useState([]);
    const [offset, setOffset] = useState(0);
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        getData();
    }, [offset]);

    // useEffect(() => {
    //     if (searchValue !== '') {
    //         const filteredArray = pokemonArray.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    //         setPokemonArray(filteredArray);
    //     } else {
    //         setPokemonArray(pokemonArray2);
    //     }
    // }, [searchValue]);
    useEffect(() => {
        if (searchValue !== '') {
            const filteredArray = imageArray.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            // setPokemonArray(filteredArray);
            setImageArray(filteredArray);
        } else {
            // setPokemonArray(pokemonArray2);
            setImageArray([]);
            getImages(pokemonArray2);
        }
    }, [searchValue]);

    async function getData() {
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${20}`, {
                method: 'GET',
            });
            const parseData = await data.json();
            setPokemonArray(parseData.results);
            setPokemonArray2(parseData.results);
            getImages(parseData.results);

        } catch (error) {
            console.log(error);
        }
    }

    async function getImages(array) {
        try {
            array.map(async item => {
                const data = await fetch(item.url);
                const parseData = await data.json();
                setImageArray(state => {
                    state = [...state, parseData]
                    return state;
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

    function handleNavigate(items) {
        // const i = items.url;
        // console.log(items.id)
        // const a = i.split('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/');
        // const a = i.split('https://pokeapi.co/api/v2/pokemon/');
        // const index = a[1].split('/');
        // navigate(`/pokemon-details/${index[0]}`);
        navigate(`/pokemon-details/${items.id}`);
    }

    return (
        <div className='pokemon_main'>
            <h1>PokeDex</h1>
            <NextAndPrevious
                offset={offset}
                setOffset={setOffset}
                limit={pokemonArray.length}
                setImageArray={setImageArray}
            />
            <div className='pokemon_inner_container'>
                {/* {
                    pokemonArray.length > 0 && pokemonArray.map(items => (
                        <div key={items.url} className='pokemon_items_container'>
                            <h3>{items.name.toUpperCase()}</h3>

                            <button
                                onClick={() => handleNavigate(items)}
                            >More details
                            </button>

                        </div>
                    ))
                } */}
                {
                    imageArray.length && imageArray.slice(0, 20).map((items, index) => (
                        <div key={index} className='pokemon_items_container'>
                            <h3>{items.name.toUpperCase()}</h3>
                            <img src={items.sprites.other.home.front_default} />
                            <button
                                onClick={() => handleNavigate(items)}
                            >More details
                            </button>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Pokemon;
