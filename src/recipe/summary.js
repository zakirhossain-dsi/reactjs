import React from 'react';
import PropTypes from 'prop-types';

class Summary extends React.Component {
    constructor(props){
        super(props);
    }

    static propTypes = {
        steps: PropTypes.number.isRequired,
        ingredients: PropTypes.number.isRequired,
        title: (props, propName) => {
            if (typeof props[propName] !== 'string')
                return new Error('A title must be a string')
            else if (props[propName].length > 20)
                return new Error('title is over 20 characters')
            return null;
        }
    };

    static defaultProps = {
        title: '[untitled recipe]',
        ingredients: 0,
        steps: 0
    };

    render() {
        const {ingredients, steps, title} = this.props;
        return (
            <div className='summary'>
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients</span>
                    <span>&nbsp;{steps} Steps</span>
                </p>
            </div>
        );
    }
}
export default Summary;