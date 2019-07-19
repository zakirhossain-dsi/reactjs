import React from 'react';
import PropTypes from 'prop-types';

function ColorForm (props){
    let _title = React.createRef();
    let _color = React.createRef();

    const submit = (e) => {
        e.preventDefault();
        props.onNewColor(_title.value, _color.value);
        _title = '';
        _color = '#000000';
    };

    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input} type='text' placeholder='Color title' required/>
            <input ref={input => _color = input} type='color' required/>
            <button>ADD</button>
        </form>
    );
}

ColorForm.propTypes = {
    onNewColor: PropTypes.func
};

ColorForm.defaultProps = {
    onNewColor: f => f
};

export default ColorForm;