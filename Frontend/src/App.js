import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from '~/services/history';
import GlobalStyles from '~/styles/GlobalStyles';

import { store, persistor } from '~/store/';

import Routes from '~/routes';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <GlobalStyles />
                    <ToastContainer autoClose={2000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
