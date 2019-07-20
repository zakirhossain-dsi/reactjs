import React from 'react';
import PropTypes from 'prop-types';
import {AddColorForm} from "./AddColorForm";
import {ColorList} from "./ColorList";
import SortMenu from "./SortMenu";

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
                <SortMenu />
                <AddColorForm />
                <ColorList />
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