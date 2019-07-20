import React from 'react';
import PropTypes from 'prop-types';
import {addColor} from "../ch8/actions";

export const AddColorForm = (props, {store}) => {
    let _title, _color;

    const submit = e => {
        e.preventDefault();
        store.dispatch(addColor(_title.value, _color.value));
        _title.value = '';
        _color.value = '#000000';
        _title.focus()
    };

    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input} type="text" placeholder="Color title..." defaultValue='Black' required/>
            <input ref={input => _color = input} type="color" required/>
            <button>ADD</button>
        </form>
    )
};

AddColorForm.contextTypes = {
    store: PropTypes.object
};