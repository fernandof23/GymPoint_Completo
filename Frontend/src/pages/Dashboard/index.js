import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Wrapper, DivTop, Content } from './styles';

export default function Dashboard() {
    return (
        <Wrapper>
            <DivTop>
                <h1>Gerenciando alunos</h1>
                <div>
                    <button type="button">
                        <MdAdd size={20} color="#fff" fontWeight="bold" />
                        CADASTRAR
                    </button>
                    <aside>
                        <MdSearch size={16} color="#999" />
                        <input type="search" placeholder="Buscar aluno" />
                    </aside>
                </div>
            </DivTop>
            <Content>
                <table>
                    <thead>
                        <th>NOME</th>
                        <th>E-MAIL</th>
                        <th>Idade</th>
                    </thead>
                    <tr>
                        <td>Fernando</td>
                        <td>fernandorato.0@hotmail.com</td>
                        <td>29 </td>
                        <td>
                            <Link editar to="/">
                                editar
                            </Link>
                        </td>
                        <td>
                            <Link to="/">apagar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Claudio</td>
                        <td>Claudio.0@hotmail.com</td>
                        <td>29 </td>
                        <td>
                            <Link to="/">editar</Link>
                        </td>
                        <td>
                            <Link to="/">apagar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Henrique</td>
                        <td>henrique.0@hotmail.com</td>
                        <td>29 </td>
                        <td>
                            <Link to="/">editar</Link>
                        </td>
                        <td>
                            <Link to="/">apagar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Mauricio</td>
                        <td>mauricio.0@hotmail.com</td>
                        <td>29 </td>
                        <td>
                            <Link to="/">editar</Link>
                        </td>
                        <td>
                            <Link to="/">apagar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Sandy</td>
                        <td>sandy.0@hotmail.com</td>
                        <td>29 </td>
                        <td>
                            <Link to="/">editar</Link>
                        </td>
                        <td>
                            <Link to="/">apagar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Mariana</td>
                        <td>mariana.0@hotmail.com</td>
                        <td>29 </td>
                        <td>
                            <Link to="/">editar</Link>
                        </td>
                        <td>
                            <Link to="/">apagar</Link>
                        </td>
                    </tr>
                </table>
            </Content>
        </Wrapper>
    );
}
