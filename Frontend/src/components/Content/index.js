import React from 'react';

import { Container } from './styles';

export default function Content({ children, inputColor }) {
    return <Container inputColor={inputColor}>{children}</Container>;
}
