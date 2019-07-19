import React from 'react';
import C from './ch8/constants';
import {store} from "./ch8/store";
import uuid from 'uuid';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render() {

        const unsubscribeLogger = store.subscribe( () => localStorage['redux-store'] = JSON.stringify(store.getState()));

        store.dispatch({
            type: C.ADD_COLOR,
            id: uuid.v4(),
            title: "Party Pink",
            color: "#F142FF",
            timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
        });

        store.dispatch({
            type: C.RATE_COLOR,
            id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
            rating: 5
        });

        console.log(store.getState());

        return "";
    }
}

export default App;
