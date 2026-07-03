import React from 'react';
import Navbar from '../shared/Navbar';
import NoticeTicker from '../shared/NoticeTicker';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div className='font-serif'>
            <Navbar />
            <NoticeTicker />
            <div className='min-h-screen'> 
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;