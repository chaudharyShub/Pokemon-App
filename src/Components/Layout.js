import React, { useState } from 'react';
import Element from './Element';
import Navbar from './Navbar/Navbar';
import SideNav from './SideNav/SideNav';

function Layout() {

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='app_main'>
            <div className="app_sidenav">
                <SideNav home="Home" />
            </div>
            <div className='right_content'>
                <Navbar setSearchValue={setSearchValue} />
                <React.Suspense fallback="Loading... Please Wait">
                    <Element searchValue={searchValue} />
                </React.Suspense>
            </div>
        </div>
    );
}

export default Layout;
