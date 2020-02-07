import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import history from '~/services/history';

import Container from '~/components/Container';
import Header from '~/components/headerAdd';
import PaperInput from '~/components/PaperInputsAdd';
import Button from '~/components/button';

import {
    createPlansRequest,
    updatePlansRequest,
} from '~/store/modules/plans/actions';

export default function Add({ match }) {
    const [plan, setPlan] = useState([]);

    const dispatch = useDispatch();
    const { id } = match.params;

    const schema = Yup.object().shape({
        title: Yup.string().required('Título Obrigatório'),
        price: Yup.string('Valor em Numeros').required(
            'Valor da mensalidade Obrigatório'
        ),
        duration: Yup.string().required(
            'Quantidade de meses do plano Obrigatório'
        ),
    });

    const plans = useSelector(state => state.plans.plans);

    useEffect(() => {
        const planEdit = plans.filter(item => item.id === Number(id));
        setPlan(planEdit);
    }, [id, plans]);

    function handleSubmit(data) {
        const { title, duration, price } = data;

        if (plan.length > 0) {
            dispatch(updatePlansRequest(id, title, duration, price));
        } else {
            dispatch(createPlansRequest(title, duration, price));
        }
    }

    return (
        <Container maxWidht="900px">
            <Form schema={schema} onSubmit={handleSubmit} initialData={plan[0]}>
                <Header>
                    {plan.length > 0 ? (
                        <h1>Edição de Plano</h1>
                    ) : (
                            <h1>Cadastro de Plano</h1>
                        )}

                    <aside>
                        <div>
                            <Button
                                width="112px"
                                height="36px"
                                background="#CCCCCC"
                                onClick={() => history.push('/dashboard/plans')}
                            >
                                <MdKeyboardArrowLeft size={20} color="#fff" />
                                Voltar
                            </Button>
                        </div>
                        <div>
                            <Button width="112px" height="36px" type="submit">
                                <MdCheck size={20} color="#fff" />
                                Salvar
                            </Button>
                        </div>
                    </aside>
                </Header>
                <PaperInput>
                    <p>TÍTULO DO PLANO</p>
                    <Input name="title" type="text" />
                    <div>
                        <div>
                            <p>DURAÇÂO (em meses)</p>
                            <Input name="duration" type="number" />
                        </div>
                        <div>
                            <p>PREÇO MENSAL</p>
                            <Input name="price" />
                        </div>
                        <div>
                            <p>PREÇO TOTAL</p>
                            <Input name="totalPrice" disabled />
                        </div>
                    </div>
                </PaperInput>
            </Form>
        </Container>
    );
}
