import React from 'react';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import history from '~/services/history';
import GlobalStyles from '~/styles/GlobalStyles';

import Routes from '~/routes';

function App() {
    return (
        <Router history={history}>
            <Routes />
            <GlobalStyles />
        </Router>
    );
}

export default App;
