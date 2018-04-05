import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';//ele ja está importando o index

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        let config = {
            apiKey: "AIzaSyDcYprcfnZsQGWeWElhwfUQ-OqlrqFPIvY",
            authDomain: "whatsapp-clone-b269d.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-b269d.firebaseio.com",
            projectId: "whatsapp-clone-b269d",
            storageBucket: "whatsapp-clone-b269d.appspot.com",
            messagingSenderId: "686760846939"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            //ReduxThunk serve para intermediar as chamadas das ActionsCreators, para que funcionem de forma sincrona
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
