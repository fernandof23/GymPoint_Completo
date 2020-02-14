import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd, MdCheckCircle } from 'react-icons/md';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Swal from 'sweetalert2';
import history from '~/services/history';
import { Content } from './styled';

import Container from '~/components/Container';
import DivTop from '~/components/DivTop';
import Button from '~/components/button';

import {
    loadRegisterRequest,
    deleteRegister,
} from '~/store/modules/register/actions';

export default function Matriculas() {
    const [register, setRegister] = useState([]);
    const dispatch = useDispatch();

    const registerTemp = useSelector(state => state.register.register);

    useEffect(() => {
        dispatch(loadRegisterRequest());
    }, [dispatch]);

    useEffect(() => {
        setRegister(registerTemp);
    }, [registerTemp]);

    function handleDelete(id, name) {
        Swal.fire({
            title: `Deseja deletar a matricula de ${name} ? `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#EE4D64',
            confirmButtonText: 'Sim, pode deletar!',
        }).then(result => {
            if (result.value) {
                dispatch(deleteRegister(id));

                window.location.reload();
            }
        });
    }

    return (
        <Container maxWidht="1380px">
            <DivTop>
                <h1>Gerenciando Matrículas</h1>
                <div>
                    <Button
                        onClick={() => history.push('/dashboard/register/add')}
                    >
                        <MdAdd size={20} color="#fff" fontWeight="bold" />
                        CADASTRAR
                    </Button>
                </div>
            </DivTop>
            <Content>
                <table>
                    <thead>
                        <th>ALUNO</th>
                        <th>PLANO</th>
                        <th>INÍCIO</th>
                        <th>TÉRMINO</th>
                        <th>ATIVA</th>
                    </thead>
                    <tbody>
                        {register.map(regis => (
                            <tr key={regis.id}>
                                <td>{regis.student.name}</td>
                                <td>{regis.plans.title}</td>
                                <td>
                                    {format(
                                        new Date(regis.start_date),
                                        "d 'de' MMMM 'de' yyyy",
                                        { locale: pt }
                                    )}
                                </td>
                                <td>
                                    {format(
                                        new Date(regis.end_date),
                                        "d 'de' MMMM 'de' yyyy",
                                        { locale: pt }
                                    )}
                                </td>
                                <td>
                                    <MdCheckCircle
                                        size={20}
                                        color={
                                            regis.active ? '#42cb59' : '#ddd'
                                        }
                                    />
                                </td>
                                <td>
                                    <Link
                                        to={`/dashboard/register/edit/${regis.id}`}
                                    >
                                        editar
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(
                                                regis.id,
                                                regis.student.name
                                            )
                                        }
                                    >
                                        {' '}
                                        apagar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
        </Container>
    );
}
