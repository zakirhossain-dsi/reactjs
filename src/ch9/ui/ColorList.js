import React from 'react';
import StarRating from "../StarRating";
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

export const Color = ({id, title, color, rating=0, onRate=f=>f, onRemove=f=>f}) => {
 return   <section className='color'>
        <h1>
            {title}
            <button className='btn btn-sm btn-danger' onClick={() => onRemove(id)}>X</button>
        </h1>
        <div className='color' style={{backgroundColor: color}}></div>
        <div>
            <StarRating starsSelected={rating} onRate={(rating) => onRate(id, rating)}/>
        </div>
    </section>
}