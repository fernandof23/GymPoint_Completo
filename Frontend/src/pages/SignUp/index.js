import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { signUpRequest } from '~/store/modules/auth/actions';

import Logo from '~/assets/logo.png';

export default function SignUp() {
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
            .email('Insira um e-mail Valido')
            .required('E-mail Obrigatório'),
        password: Yup.string()
            .min(6, 'A senha deve ter no mínimo 6 digitos')
            .required('Senha Obrigatória'),
    });

    const dispatch = useDispatch();
    function handleCreate(data) {
        dispatch(signUpRequest(data));
    }
    return (
        <>
            <img src={Logo} alt="GymPoint" />
            <Form onSubmit={handleCreate} schema={schema}>
                <p>NOME</p>
                <Input name="name" placeholder="Seu Nome" />
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
                <button type="submit">Criar Conta</button>
            </Form>
            <Link to="/">
                <span>Login</span>
            </Link>
        </>
    );
}
