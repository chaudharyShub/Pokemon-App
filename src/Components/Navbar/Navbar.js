import './Navbar.css';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';

function Navbar({ setSearchValue }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-info bg-info navbar_sticky">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>My-Project</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <span className="example-spacer"></span>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_list_container">
                        <Categories />
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={e => {
                                    setSearchValue(e.target.value);
                                }}
                            />
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
