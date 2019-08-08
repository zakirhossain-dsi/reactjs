import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ title, steps }) =>
    <section className="instructions">
        <h2>{title}</h2>
        {steps.map((s, i) =>
            <p key={i}>{s}</p>
        )}
    </section>

Instructions.propTypes = {
    title: PropTypes.string,
    steps: PropTypes.array
}

export default Instructions
