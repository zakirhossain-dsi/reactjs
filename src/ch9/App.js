import React from 'react';
import PropTypes from 'prop-types';
import {Menu, NewColor, Colors} from "./containers";

class App extends React.Component{

    constructor(props){
        super(props);
        this.store = props.store;
    }

    getChildContext(){
        return { store: this.props.store}
    }

    componentWillMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {colors, sort} = this.store.getState();
        return(
            <div className='app'>
                <Menu />
                <NewColor />
                <Colors />
            </div>
        );
    }

}

App.propTypes = {
    store: PropTypes.object.isRequired
};

App.childContextTypes = {
    store: PropTypes.object.isRequired
};

export default App;