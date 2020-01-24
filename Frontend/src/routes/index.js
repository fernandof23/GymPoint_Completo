import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Planos from '~/pages/Planos';
import Matriculas from '~/pages/Matriculas';
import Help from '~/pages/HelpSystem';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/planos" component={Planos} isPrivate />
            <Route path="/matriculas" component={Matriculas} isPrivate />
            <Route path="/helpsystem" component={Help} isPrivate />
        </Switch>
    );
}
