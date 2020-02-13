/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    MdAdd,
    MdSearch,
    MdNavigateBefore,
    MdNavigateNext,
} from 'react-icons/md';

import history from '~/services/history';

import Button from '~/components/button';
import Container from '~/components/Container';
import DivTop from '~/components/DivTop';
import Content from '~/components/Content';
import Footer from '~/components/Footer';

import {
    loadStudentsRequest,
    deleteStudentRequest,
} from '~/store/modules/students/actions';

export default function Students() {
    const [student, setStudent] = useState([]);
    const [searchStudent, setSearchStudent] = useState('');
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const students = useSelector(state => state.students.students);

    useEffect(() => {
        document.title = 'GymPoint - Alunos';
    }, []);

    useEffect(() => {
        dispatch(loadStudentsRequest(searchStudent, page));
    }, [dispatch, page, searchStudent]);

    useEffect(() => {
        setStudent(students);
    }, [students]);

    function handleDelete(id) {
        const deletedCliente = student.filter(item => item.id === id);
        const confirm = window.confirm(
            `Você deseja deletar ${deletedCliente[0].name} ? `
        );

        if (confirm) {
            dispatch(deleteStudentRequest(id));
            window.location.reload();
        }
    }

    function filterStudent(e) {
        const name = e.target.value;

        setPage(1);
        setSearchStudent(name);
    }

    return (
        <Container>
            <DivTop>
                <h1>Gerenciando alunos</h1>
                <div>
                    <Button
                        onClick={() => history.push('/dashboard/students/add')}
                    >
                        <MdAdd size={20} color="#fff" fontWeight="bold" />
                        CADASTRAR
                    </Button>
                    <aside>
                        <MdSearch size={16} color="#999" />
                        <input
                            type="search"
                            placeholder="Buscar aluno"
                            onChange={e => filterStudent(e)}
                        />
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
                                    <Link
                                        to={`/dashboard/students/edit/${item.id}`}
                                    >
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
                    {page > 1 ? (
                        <button type="button" onClick={() => setPage(page - 1)}>
                            <MdNavigateBefore size={23} />
                        </button>
                    ) : null}
                    <div>
                        <h4>Página {page}</h4>
                    </div>
                    {student.length < 10 ? null : (
                        <button type="button" onClick={() => setPage(page + 1)}>
                            <MdNavigateNext size={23} />
                        </button>
                    )}
                </Footer>
            </Content>
        </Container>
    );
}
