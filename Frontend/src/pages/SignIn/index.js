import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import Logo from '~/assets/logo.png';

export default function SignIn() {
    const [loading, setLoading] = useState(false);

    const load = useSelector(state => state.auth.loading);

    setLoading(load);
    const dispatch = useDispatch();
    function handleSubmit(data) {
        const { email, password } = data;

        dispatch(signInRequest(email, password));
    }

    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Insira um e-mail Valido')
            .required('E-mail Obrigatorio'),
        password: Yup.string().required('Senha Obrigatoria'),
    });

    return (
        <>
            <img src={Logo} alt="GymPoint" />
            <Form onSubmit={handleSubmit} schema={schema}>
                <p>SEU E-MAIL</p>
                <Input
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <p>SUA SENHA</p>
                <Input
                    name="password"
                    type="password"
                    placeholder="*********"
                />

                <button type="submit">
                    {loading ? 'Aguarde ...' : 'Entrar no Sistema'}
                </button>
            </Form>
            <Link to="/register">
                <span>Cadastrar Instrutor</span>
            </Link>
        </>
    );
}
