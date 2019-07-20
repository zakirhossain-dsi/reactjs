import {createStore, combineReducers, applyMiddleware} from 'redux';
import { colors, sort } from './reducers';

function logger (store) {
    return function (next) {
        return function (action) {
            console.groupCollapsed('dispatching', action.type);
            next(action);
            console.log(store.getState());
            console.groupEnd();
        }
    }
}

function saver(store){
    return function (next) {
        return function (action) {
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