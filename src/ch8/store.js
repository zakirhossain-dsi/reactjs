import { createStore, combineReducers } from 'redux';
import { colors, sort } from './reducers';
//import {initialState} from "./state";

const storeData = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {};
export const store = createStore(combineReducers({colors, sort}), storeData);