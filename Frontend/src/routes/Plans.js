import React from 'react';
import RouteWrapper from './route';

import Plans from '~/pages/Planos';
import Add from '~/pages/Planos/add';

export default function PlansRoutes() {
    return (
        <>
            <RouteWrapper
                path="/dashboard/plans"
                exact
                component={Plans}
                isPrivate
            />
            <RouteWrapper
                path="/dashboard/plans/add"
                component={Add}
                isPrivate
            />
            <RouteWrapper
                path="/dashboard/plans/edit/:id"
                component={Add}
                isPrivate
            />
        </>
    );
}
