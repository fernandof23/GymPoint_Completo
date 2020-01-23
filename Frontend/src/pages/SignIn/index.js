import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import Logo from '~/assets/logo.png';

export default function SignIn() {
    return (
        <>
            <img src={Logo} alt="GymPoint" />
            <form>
                <span>SEU E-MAIL</span>
                <input type="email" placeholder="exemplo@email.com" />
                <span>SUA SENHA</span>
                <input type="password" placeholder="*********" />
                <button type="submit">Entrar no Sistema</button>
            </form>
            <Link to="/register">
                <span>Cadastrar Instrutor</span>
            </Link>
        </>
    );
}
