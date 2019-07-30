import React from 'react';
import {NewColor, Color, Colors} from './containers';
import {Route, Switch} from 'react-router-dom';
import Menu from './ui/Menu';

const App = () =>
    <Switch>
        <Route exact path='/:id' component={Color} />
        <Route path='/' component ={() =>
            <div className='app'>
                <Route component={Menu} />
                <NewColor/>
                <Switch>
                    <Route exact path='/' component={Colors}/>
                    <Route path='/sort/:sort' component={Colors}/>
                </Switch>
            </div>
        } />
    </Switch>

export default App;