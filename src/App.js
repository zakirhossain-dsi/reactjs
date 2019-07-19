import React from 'react';
import storeFactory from "./ch8/store";
import {addColor} from "./ch8/actions";
import {initialState} from "./ch8/state";

class App extends React.Component{
    render() {
        //const initialData = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState;
        const store = storeFactory(initialState);

        store.dispatch(addColor("#FFFFFF","Bright White"));

        return "";
    }
}

export default App;
