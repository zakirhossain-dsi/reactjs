import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount(){
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render(){
        console.log(this.props.children);
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default Modal;