import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Wrapper, Content, Botoes } from './styles';

import logo from '~/assets/logomin.svg';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Content>
                <div>
                    <Link to="/">
                        <img src={logo} alt="gymlogo" />
                    </Link>
                    <Botoes>
                        <Link to="/students">
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
                    <p>{profile.name}</p>
                    <button type="button" onClick={() => dispatch(signOut())}>
                        Sair do Sistema
                    </button>
                </aside>
            </Content>
        </Wrapper>
    );
}
