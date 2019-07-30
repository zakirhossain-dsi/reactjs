import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './ch11/color-organizer/App';
import storeFactory from './ch11/color-organizer/StoreFactory';
import {initialState} from './ch11/color-organizer/InitialState';
import './index.css';
import Provider from 'react-redux/es/components/Provider';
import {HashRouter} from 'react-router-dom';

const store = storeFactory(initialState);

const render = ()=> ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root'));
render();

serviceWorker.unregister();
