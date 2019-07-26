import {compose} from 'redux';

const sortBy = (type, field) => {
    switch (type) {
        case 'date' :
            return (a, b) => new Date(b[field]) - new Date(a[field]);
        case 'string' :
            return (a, b) => (a[field] < b[field]) ? -1 : 1;
        default:
            return (a, b) => b[field] - a[field];
    }
}

export const sortFunction = sort =>
    (sort === 'SORTED_BY_TITLE') ?
        sortBy('string', 'title') :
        (sort === 'SORTED_BY_RATING') ?
            sortBy('number', 'rating') :
            sortBy('date', 'timestamp')

export const getFirstArrayItem = array => array[0];
export const filterArrayById = (array, id) => array.filter(item => item.id == id);
export const findById = compose(getFirstArrayItem, filterArrayById);