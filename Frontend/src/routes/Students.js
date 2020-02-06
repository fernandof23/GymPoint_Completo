import React from 'react';
import RouteWrapper from './route';

import Student from '~/pages/Students';
import StudentAdd from '~/pages/Students/add';

export default function StudentRoutes() {
    return (
        <>
            <RouteWrapper
                path="/dashboard/students"
                exact
                component={Student}
                isPrivate
            />
            <RouteWrapper
                path="/dashboard/students/add"
                component={StudentAdd}
                isPrivate
            />
        </>
    );
}
