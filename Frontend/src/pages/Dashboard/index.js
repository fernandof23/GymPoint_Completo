import React from 'react';

import logo from '~/assets/logo.png';

import { Container } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <img src={logo} alt="gymlogo" />
        </Container>
    );
}
