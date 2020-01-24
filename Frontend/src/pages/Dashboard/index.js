import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import { Wrapper, DivTop, Content, Footer } from './styles';

export default function Dashboard() {
    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStudents() {
            try {
                setLoading(true);
                const response = await api.get('/students');
                setStudent(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        }

        loadStudents();
    }, []);

    async function handleDelete(id) {
        console.log(id);
    }

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
                    <tbody>
                        {student.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>
                                    <Link to={`/dashboard/${item.id}`}>
                                        editar
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        apagar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Footer>
                    <Link to="/">1</Link>
                    <Link to="/">2</Link>
                    <Link to="/">3</Link>
                    <Link to="/">4</Link>
                    <Link to="/">5</Link>
                </Footer>
            </Content>
        </Wrapper>
    );
}
