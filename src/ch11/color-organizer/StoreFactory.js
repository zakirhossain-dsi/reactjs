import {createStore, combineReducers, applyMiddleware} from 'redux';
import { colors } from './reducers';

const logger  = store => next => action => {
    console.groupCollapsed('dispatching', action.type);
    console.log('previous state: ', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
    console.groupEnd();
};

const saver = store => next => action => {
    next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
};

const storeFactory = initialState => applyMiddleware(logger, saver)(createStore)(combineReducers({colors}), initialState);

// export const store = createStore(combineReducers({colors, sort}), storeData);
export default storeFactory;