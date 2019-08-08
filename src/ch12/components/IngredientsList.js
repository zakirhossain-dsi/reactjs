import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient'

export const IngredientsList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>

IngredientsList.propTypes = {
    list: PropTypes.array
}

export default IngredientsList