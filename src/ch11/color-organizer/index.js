'use restrict';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './ch11/App';
import storeFactory from './ch11/store-factory';
import {initialState} from './ch11/state';
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
