import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    Image,
    Form,
    FormInput,
    SubmitButton,
    ContainerInput,
} from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function SignIn() {
    const [idLogin, setIdLogin] = useState('');

    const loading = useSelector(state => state.auth.loading);

    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(signInRequest(idLogin));
    }

    return (
        <Container>
            <Image source={logo} />

            <Form>
                <ContainerInput>
                    <FormInput
                        keyboardType="number-pad"
                        autoCaptalize="none"
                        placeholder="Informe seu ID de cadastro"
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={idLogin}
                        onChangeText={setIdLogin}
                    />
                </ContainerInput>

                <SubmitButton loading={loading} onPress={handleSubmit}>
                    Entrar no Sistema
                </SubmitButton>
            </Form>
        </Container>
    );
}
