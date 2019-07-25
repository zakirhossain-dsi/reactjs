import React from 'react';
import Star from './star';
import PropTypes from 'prop-types';

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) => {
    return <div className='star-rating'>
        {
            [...Array(totalStars)].map((n, i) => <Star key={i} selected={i < starsSelected} onClick={() => onRate(i+1)}/>)
        }
        <br/>
        <p>{starsSelected} of {totalStars} stars</p>
    </div>
};

StarRating.propTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func
};

export default StarRating;