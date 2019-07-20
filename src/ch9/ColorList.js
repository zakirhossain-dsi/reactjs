import React from 'react';
import StarRating from "./StarRating";
import 'bootstrap/dist/css/bootstrap.css';
import { sortFunction} from '../lib/array-helpers';
import {rateColor, removeColor} from "../ch8/actions";

export const ColorList = ({store}) => {
    const { colors, sort} = store.getState();
    const sortedColors = [...colors].sort(sortFunction(sort));
    return <div>
        {
            colors.length === 0 ? <p>No color Listed. (Add a color)</p> :
                sortedColors.map(color => <Color key={color.id} {...color}
                                                onRate={rating => store.dispatch(rateColor(color.id, rating))}
                                                onRemove={() => store.dispatch(removeColor(color.id))}/>)
        }
    </div>
};

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
    </section>;