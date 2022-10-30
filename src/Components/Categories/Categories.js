import { useNavigate } from 'react-router-dom';
import './Categories.css';

function Categories() {

    const navigate = useNavigate();

    const dropdownList = [
        { id: 'berry', category: 'Berries' },
        { id: 'contest-type', category: 'Contests' },
        { id: 'encounter-method', category: 'Encounters' },
        { id: 'evolution-chain', category: 'Evolution' },
        { id: 'generation', category: 'Games' },
        { id: 'item', category: 'Items' },
        { id: 'location', category: 'Locations' },
        { id: 'machine', category: 'Machines' },
        { id: 'move', category: 'Moves' },
        { id: 'ability', category: 'Pokémon' }
    ];

    return (
        <div>
            <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                </a>
                <ul className="dropdown-menu dropdown_menu"
                    onClick={(e) => {
                        const value = e.target.id.split('|');
                        navigate(`/categories/${value[1]}/${value[0]}`);
                        e.stopPropagation();
                    }}>
                    {
                        dropdownList?.map((element, index) => (
                            <li key={index}>
                                <a id={`${element.id}|${element.category}`}
                                    className="dropdown-item"
                                >{element.category}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Categories;
