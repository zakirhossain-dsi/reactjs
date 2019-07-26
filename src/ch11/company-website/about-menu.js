import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const selectedStyle = {
    background: 'white',
    color: 'slategray'
};

export const AboutMenu = ({match}) =>
    <div className='about-menu'>
        <li>
            <NavLink to='/about' style={match.isExact && selectedStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to='/about/history' activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to='/about/services' activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to='/about/location' activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>

AboutMenu.propTypes = {
    match: PropTypes.object
};