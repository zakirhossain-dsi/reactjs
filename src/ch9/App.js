import React from 'react';
import PropTypes from 'prop-types';
import {Menu, NewColor, Colors} from "./containers";

class App extends React.Component{

    render() {
        return(
            <div className='app'>
                <Menu />
                <NewColor />
                <Colors />
            </div>
        );
    }

}

export default App;