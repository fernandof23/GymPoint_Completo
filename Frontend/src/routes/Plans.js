import React from 'react';
import RouteWrapper from './route';

import Plans from '~/pages/Planos';

export default function PlansRoutes() {
    return (
        <RouteWrapper
            path="/dashboard/plans"
            exact
            component={Plans}
            isPrivate
        />
    );
}
