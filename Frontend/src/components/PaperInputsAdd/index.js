import React from 'react';

import { Paper } from './styles';

export default function PaperInput({ disabled, children }) {
    return <Paper disabled={disabled}>{children}</Paper>;
}
