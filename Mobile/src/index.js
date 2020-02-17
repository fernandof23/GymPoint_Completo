import React from 'react';
import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { persistor, store } from './store';

import Routes from './routes';

export default function src() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Routes />
                </PersistGate>
            </Provider>
        </>
    );
}
