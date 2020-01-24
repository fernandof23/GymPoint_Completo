import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Botoes } from './styles';

import logo from '~/assets/logomin.svg';

export default function header() {
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
                    <button type="button">Sair do Sistema</button>
                </aside>
            </Content>
        </Wrapper>
    );
}
