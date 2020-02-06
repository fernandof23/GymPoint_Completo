import React from 'react';
import RouteWrapper from './route';

import HelpSystem from '~/pages/HelpSystem';

export default function HelpSystemRoutes() {
    return (
        <RouteWrapper
            path="/dashboard/helpsystem"
            exact
            component={HelpSystem}
            isPrivate
        />
    );
}
