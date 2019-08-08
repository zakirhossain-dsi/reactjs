import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe'

const Menu = ({ recipes }) =>
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            { recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>

Menu.propTypes = {
    recipes: PropTypes.array
}

export default Menu