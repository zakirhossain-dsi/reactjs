"use restrict";

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './ch9/App';
import storeFactory from './ch8/store';
import {initialState} from "./ch8/state";
import './index.css';

const store = storeFactory(initialState);

const render = ()=> ReactDOM.render(<App store={store}/>, document.getElementById('root'));
store.subscribe(render);
render();

serviceWorker.unregister();
