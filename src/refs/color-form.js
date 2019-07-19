import React from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends React.Component{
    constructor(props){
        super(props);
        this._title = React.createRef();
        this._color = React.createRef();
    }

    submit = (e) => {
        e.preventDefault();
        this.props.onNewColor(this._title.current.value, this._color.current.value);
        this._title.current.value = '';
        this._color.current.value = '#000000';
        this._title.current.focus();
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref={this._title} type='text' placeholder='Color title' required/>
                <input ref={this._color} type='color' required/>
                <button>ADD</button>
            </form>
        );
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f => f
}

export default AddColorForm;