import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {PageTemplate} from './page-template';
import {AboutMenu} from './about-menu';
import {Company} from './about/company';
import {History} from './about/history';
import {Services} from './about/services';
import {Location} from './about/location';

export const Home = () =>
    <PageTemplate>
        <section className='home'>
            <h1>[ Home Page ]</h1>
        </section>
    </PageTemplate>

export const About = ({match}) =>
    <PageTemplate>
        <section className='about'>
            <Route component={AboutMenu} />
            <Route exact path='/about' component={Company} />
            <Route path='/about/history' component={History} />
            <Route path='/about/services' component={Services} />
            <Route path='/about/location' component={Location} />
        </section>
    </PageTemplate>

export const Events = () =>
    <PageTemplate>
        <section className='events'>
            <h1>[ Events Calendar ]</h1>
        </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className='products'>
            <h1>[ Products Catalog ]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className='contact'>
            <h1>[ Contact Us ]</h1>
        </section>
    </PageTemplate>

export const NotFound = ({location}) =>
    <PageTemplate>
        <div className='whoops-404'>
            <h1>Resource not fount at {location.pathname}</h1>
        </div>
    </PageTemplate>

NotFound.propTypes = {
    location: PropTypes.object
};

About.propTypes = {
    match: PropTypes.object
}