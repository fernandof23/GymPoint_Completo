import React from 'react';
import RouteWrapper from './route';

import Register from '~/pages/Matriculas';
import RegisterAdd from '~/pages/Matriculas/add';

export default function RegisterStudentsRoutes() {
    return (
        <>
            <RouteWrapper
                path="/dashboard/register"
                exact
                component={Register}
                isPrivate
            />
            <RouteWrapper
                path="/dashboard/register/add"
                component={RegisterAdd}
                isPrivate
            />
            <RouteWrapper
                path="/dashboard/register/edit/:id"
                component={RegisterAdd}
                isPrivate
            />
        </>
    );
}
