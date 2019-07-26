import C from './constants';
import uuid from 'uuid';

export const removeColor = (id) => ({ type: C.REMOVE_COLOR, id });
export const rateColor = (id, rating) => ({ type: C.RATE_COLOR, id, rating });
export const addColor = (title, color) => ({
    type: C.ADD_COLOR,
    id: uuid.v4(),
    title,
    color,
    timestamp: new Date().toString()
});

export const sortColors = sortedBy => {
    if ('rating' === sortedBy)
        return ({type: C.SORT_COLORS, sortBy: 'SORTED_BY_RATING'});
    else if ('title' === sortedBy)
        return ({type: C.SORT_COLORS, sortBy: 'SORTED_BY_TITLE'});
    else
        return ({type: C.SORT_COLORS, sortBy: 'SORTED_BY_DATE'});
};
