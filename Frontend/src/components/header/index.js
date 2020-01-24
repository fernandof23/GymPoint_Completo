import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Wrapper, Content, Botoes } from './styles';

import logo from '~/assets/logomin.svg';

export default function Header() {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Content>
                <div>
                    <Link to="/">
                        <img src={logo} alt="gymlogo" />
                    </Link>
                    <Botoes>
                        <Link to="/dashboard">
                            <p>ALUNOS</p>
                        </Link>

                        <Link to="/planos">
                            <p>PLANOS</p>
                        </Link>

                        <Link to="/matriculas">
                            <p>MATRÌCULAS</p>
                        </Link>

                        <Link to="/helpsystem">
                            <p>PEDIDOS DE AUXÌLIO</p>
                        </Link>
                    </Botoes>
                </div>

                <aside>
                    <p>Fernando Santos</p>
                    <button type="button" onClick={() => dispatch(signOut())}>
                        Sair do Sistema
                    </button>
                </aside>
            </Content>
        </Wrapper>
    );
}
