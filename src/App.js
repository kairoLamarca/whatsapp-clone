import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import reducers from './reducers';//ele ja está importando o index

export default props => (
    <Provider store={createStore(reducers)}>
        <Routes />
    </Provider>
);
