import React from 'react';
import {Menu, NewColor, Color, Colors} from './containers';
import {Route, Switch} from 'react-router-dom';

const App = () =>
    <Switch>
        <Route exact path='/:id' component={Color} />
        <Route path='/' component ={() =>
            <div className='app'>
                <Menu/>
                <NewColor/>
                <Colors/>
            </div>
        } />
    </Switch>

export default App;