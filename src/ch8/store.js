import {createStore, combineReducers, applyMiddleware} from 'redux';
import { colors, sort } from './reducers';

function logger (store) {
    return function (next) {
        return function (action) {
            console.groupCollapsed('dispatching', action.type);
            console.log('logger ', next);
            next(action);
            console.log('logger ', store.getState());
            console.groupEnd();
        }
    }
}

function saver(store){
    return function (next) {
        return function (action) {
            console.log("Saver: ", next);
            next(action);
            localStorage['redux-store'] = JSON.stringify(store.getState());
        }
    }
}

function storeFactory(initialState){
    return applyMiddleware(logger, saver)(createStore)(combineReducers({colors, sort}), initialState);
}


// export const store = createStore(combineReducers({colors, sort}), storeData);
export default storeFactory;