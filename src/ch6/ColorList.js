import React from 'react';
import StarRating from './StarRating';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

export const ColorList = ({colors=[], onRemove=f=>f, onRate=f=>f}) =>
    <div>
        {colors.length === 0 ? <p>No color Listed. (Add a color)</p> :
            colors.map(color => <Color key={color.id} {...color} onRate={rating => onRate(color.id, rating)} onRemove={() => onRemove(color.id)}/>)}
    </div>

export const Color = ({title, color, rating=0, onRemove=f=>f, onRate=f=>f}) =>
    <section className='color'>
        <h1>
            {title}
            <button className='btn btn-sm btn-danger' onClick={onRemove}>X</button>
        </h1>
        <div className='color' style={{backgroundColor: color}}></div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};

Color.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    rating: PropTypes.number,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};