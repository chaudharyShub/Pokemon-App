import './SideNav.css';
import { NavLink } from 'react-router-dom';

function SideNav({ home }) {
    return (
        <nav className='sidenav_main'>
            <ul className='side_list_container'>
                <NavLink to='/home'><li>{home}</li></NavLink>
                <NavLink to='/pokemon'><li>Pokemon</li></NavLink>
            </ul>
        </nav>
    );
}

export default SideNav;
