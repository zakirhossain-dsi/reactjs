import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import './stylesheets/menus.scss';

const selectedStyle = {
    background: 'white',
    color: 'slategray'
};

export const MainMenu = () =>
    <nav className='main-menu'>
        <NavLink to='/'>
            <FaHome/>
        </NavLink>
        <NavLink to='/about' activeStyle={selectedStyle}>
            [ About ]
        </NavLink>
        <NavLink to='/events' activeStyle={selectedStyle}>
            [ Events ]
        </NavLink>
        <NavLink to='/products' activeStyle={selectedStyle}>
            [ Products ]
        </NavLink>
        <NavLink to='/contact' activeStyle={selectedStyle}>
            [ Contact Us ]
        </NavLink>
    </nav>