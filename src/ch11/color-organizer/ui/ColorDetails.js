import React from 'react';
import PropTypes from 'prop-types';

export const ColorDetails = ({title, color, history}) =>
    <div className='color-details' style={{backgroundColor: color}} onClick={() => history.goBack()}>
        <h1>{title}</h1>
        <h1>{color}</h1>
    </div>

ColorDetails.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    history:PropTypes.object
}