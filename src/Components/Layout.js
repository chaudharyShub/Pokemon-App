import Element from './Element';
import Navbar from './Navbar/Navbar';
import SideNav from './SideNav/SideNav';
import React from 'react';

function Layout() {
    return (
        <div className='app_main'>
            <div className="app_sidenav">
                <SideNav home="Home" />
            </div>
            <div className='right_content'>
                <Navbar />
                <div className='element_container'>
                    <React.Suspense fallback="Loading... Please Wait">
                        <Element />
                    </React.Suspense>
                </div>
            </div>
        </div>
    );
}

export default Layout;
