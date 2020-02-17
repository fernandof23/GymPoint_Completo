import React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { persistor, store } from './store';

import App from './App';

export default function src() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                    <App />
                </PersistGate>
            </Provider>
        </>
    );
}
