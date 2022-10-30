import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoriesDetails.css';
import NextAndPrevious from '../../NextAndPrevious/NextAndPrevious';

function CategoriesDetails() {

    const { category } = useParams();
    const { id } = useParams();
    const [categoryArray, setCategoryArray] = useState([]);
    const [offset, setOffset] = useState(0);
    const [disable, setDisable] = useState(false);

    async function getData() {
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/${id}?offset=${offset}&limit=${20}`);
            const parseData = await data.json();
            setCategoryArray(parseData.results);
            parseData.results[0].name ? setDisable(false) : setDisable(true);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [id, offset]);

    return (
        <div className='category_links_main'>
            <NextAndPrevious
                heading={category}
                offset={offset}
                setOffset={setOffset}
                limit={categoryArray.length}
                isDisable={disable}
            />
            <div className='category_links_container'>
                <div className='links_parent'>
                    {
                        (categoryArray.length && categoryArray[0].name)
                            ? categoryArray.map((element, index) => {
                                return (
                                    <a key={index} href={element.url}>
                                        {element.name[0].toUpperCase() + element.name.slice(1)}
                                    </a>
                                )
                            }) : <h1>Name not present !!!</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoriesDetails;

