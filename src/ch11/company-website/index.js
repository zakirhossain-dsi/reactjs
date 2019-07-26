import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Home, About, Events, Products, Contact, NotFound} from '../src/ch11/pages';

window.React = React;

const UniqueIDHeader = ({match})=><h1>{match.params.id}</h1>
const Member = ({match}) =>
    <div className='member'>
        <ul>
            <li>gender: {match.params.gender}</li>
            <li>state: {match.params.state}</li>
            <li>city: {match.params.city}</li>
        </ul>
    </div>

Member.propTypes = UniqueIDHeader.propTypes = {
    match: PropTypes.object
};

render(
    <HashRouter>
        <div className='main'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Redirect from='/history' to='/about/history'/>
                <Redirect from='/services' to='/about/services'/>
                <Redirect from='/location' to='/about/location'/>
                <Route path='/events' component={Events} />
                <Route path='/products' component={Products} />
                <Route path='/contact' component={Contact} />
                <Route exact path='/:id' component={UniqueIDHeader} />
                <Route path='/members/:gender/:state/:city' component={Member} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById('root')
);