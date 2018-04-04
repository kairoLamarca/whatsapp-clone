import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

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
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
