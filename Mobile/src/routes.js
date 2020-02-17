import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator({
            SignIn,
            Dashboard,
        })
    );
