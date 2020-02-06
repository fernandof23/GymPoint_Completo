import React from 'react';
import RouteWrapper from './route';

import Register from '~/pages/Matriculas';

export default function RegisterStudentsRoutes() {
    return (
        <RouteWrapper
            path="/dashboard/register"
            exact
            component={Register}
            isPrivate
        />
    );
}
