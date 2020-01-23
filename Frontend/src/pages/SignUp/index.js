import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/logo.png';

export default function SignUp() {
    return (
        <>
            <img src={Logo} alt="GymPoint" />
            <form>
                <span>NOME</span>
                <input placeholder="Seu Nome" />
                <span>SEU E-MAIL</span>
                <input type="email" placeholder="exemplo@email.com" />
                <span>SUA SENHA</span>
                <input type="password" placeholder="*********" />
                <button type="submit">Entrar no Sistema</button>
            </form>
            <Link to="/">
                <span>Login</span>
            </Link>
        </>
    );
}
