import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-info bg-info navbar_sticky">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>My-Project</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_list_container">
                        {/* <li className="nav-item">
                            <NavLink to='/home' className="nav-link" aria-current="page">Home</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
