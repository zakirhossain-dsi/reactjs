import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

export const ColorList = ({colors, onRemove, onRate}) => {
    return (
        <div>
            {
                colors.length === 0 ? <p>No color Listed. (Add a color)</p> :
                    colors.map(color => <Color key={color.id} {...color} onRemove={onRemove} onRate={onRate}/>)
            }
        </div>
    );
};

ColorList.propTypes = {
    colors: PropTypes.array,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};