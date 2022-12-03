import React from 'react';
import { Outlet } from 'react-router-dom';
import Navebar from '../component/page/navebar/Navebar'
import Footer from '../component/page/Footer/Footer'

const Main = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;