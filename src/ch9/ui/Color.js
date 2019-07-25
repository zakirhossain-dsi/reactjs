import React from 'react';
import StarRating from '../StarRating';
import PropTypes from 'prop-types';

const Color = ({id, title, color, rating=0, onRate=f=>f, onRemove=f=>f}) => {
    return (
        <section className='color'>
            <h1>
                {title}
                <button className='btn btn-sm btn-danger' onClick={() => onRemove(id)}>X</button>
            </h1>
            <div className='color' style={{backgroundColor: color}}></div>
            <div>
                <StarRating starsSelected={rating} onRate={(rating) => onRate(id, rating)}/>
            </div>
        </section>
    );
};

Color.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    rating: PropTypes.number,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};

export default Color;