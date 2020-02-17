import React from 'react';

import { Container, Image } from './styles';

import logo from '~/assets/logo-header.jpg';

export default function Header() {
    return (
        <Container>
            <Image source={logo} />
        </Container>
    );
}
