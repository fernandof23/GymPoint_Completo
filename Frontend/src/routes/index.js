import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteWrapper from './route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

import StudentRoute from './Students';
import PlansRoutes from './Plans';
import RegisterStudentsRoutes from './RegisterStudents';
import HelpSystemRoutes from './HelpSystem';

export default function Routes() {
    return (
        <Switch>
            <RouteWrapper path="/" exact component={SignIn} />

            <RouteWrapper path="/register" component={SignUp} />

            <RouteWrapper
                path="/dashboard"
                exact
                component={Dashboard}
                isPrivate
            />

            <Route path="/dashboard/students">{StudentRoute()}</Route>

            <Route path="/dashboard/plans">{PlansRoutes()}</Route>

            <Route path="/dashboard/register">{RegisterStudentsRoutes()}</Route>

            <Route path="/dashboard/helpsystem">{HelpSystemRoutes()}</Route>
        </Switch>
    );
}
