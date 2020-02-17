import React from 'react';

import { Container, Image } from './styles';

import logo from '~/assets/logo.png';
import Button from '~/components/Button';

export default function SignIn() {
    return (
        <Container>
            <Image source={logo} />
        </Container>
    );
}
