import React from 'react';
import { MainMenu} from './main-menu';
import PropTypes from 'prop-types';
import './stylesheets/pages.scss';

export const PageTemplate = ({children}) =>
    <div className='page'>
        <MainMenu/>
        {children}
    </div>

PageTemplate.propTypes = {
    children: PropTypes.element
};