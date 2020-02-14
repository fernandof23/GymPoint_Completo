import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { MdAdd } from 'react-icons/md';

import history from '~/services/history';
import Container from '~/components/Container';
import DivTop from '~/components/DivTop';
import Content from '~/components/Content';
import Button from '~/components/button';

import { loadPlansRequest, deletedPlan } from '~/store/modules/plans/actions';

export default function Planos() {
    const dispatch = useDispatch();
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        dispatch(loadPlansRequest());
    }, [dispatch]);

    const dataPlans = useSelector(state => state.plans.plans);

    useEffect(() => {
        setPlans(dataPlans);
    }, [dataPlans]);

    function handleDelete(id) {
        Swal.fire({
            title: `Deseja deletar esse plano? `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#EE4D64',
            confirmButtonText: 'Sim, pode deletar!',
        }).then(result => {
            if (result.value) {
                dispatch(deletedPlan(id));
                window.location.reload();
            }
        });
    }

    return (
        <Container maxWidht="900px">
            <DivTop>
                <h1>Gerenciando Planos</h1>
                <div>
                    <Button
                        onClick={() => history.push('/dashboard/plans/add')}
                    >
                        <MdAdd size={20} color="#fff" fontWeight="bold" />
                        CADASTRAR
                    </Button>
                </div>
            </DivTop>
            <Content>
                <table>
                    <thead>
                        <th>TÍTULO</th>
                        <th>DURAÇÂO</th>
                        <th>VALOR p/MÊS</th>
                    </thead>
                    <tbody>
                        {plans.map(plan => (
                            <tr key={plan.id}>
                                <td>{plan.title}</td>
                                <td>
                                    {plan.duration}{' '}
                                    {plan.duration === 1 ? 'mês' : 'meses'}
                                </td>
                                <td>{plan.priceFormated}</td>
                                <td>
                                    <Link
                                        to={`/dashboard/plans/edit/${plan.id}`}
                                    >
                                        editar
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(plan.id)}
                                    >
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
