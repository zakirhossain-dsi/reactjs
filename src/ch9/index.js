'use restrict';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './ch9/App';
import storeFactory from './ch8/store-factory';
import {initialState} from './ch8/state';
import './index.css';
import Provider from 'react-redux/es/components/Provider';

const store = storeFactory(initialState);

const render = ()=> ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
render();

serviceWorker.unregister();
