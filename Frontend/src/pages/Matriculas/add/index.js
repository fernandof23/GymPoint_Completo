import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import history from '~/services/history';

import { InputField } from './styles';

import { loadPlansRequest } from '~/store/modules/plans/actions';
import { loadStudentsRequest } from '~/store/modules/students/actions';

import Container from '~/components/Container';
import Header from '~/components/headerAdd';
import PaperInput from '~/components/PaperInputsAdd';
import Button from '~/components/button';

export default function Add() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPlansRequest());
        dispatch(loadStudentsRequest());
    }, [dispatch]);

    const plans = useSelector(state => state.plans.plans);
    const students = useSelector(state => state.students.students).map(
        item => ({
            ...item,
            title: item.name,
        })
    );

    return (
        <Container maxWidht="900px">
            <Form>
                <Header>
                    <h1>Cadastro de Matrícula</h1>
                    <aside>
                        <div>
                            <Button
                                width="112px"
                                height="36px"
                                background="#CCCCCC"
                                onClick={() =>
                                    history.push('/dashboard/register')
                                }
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
                    <p>ALUNO</p>
                    <Select name="student" options={students} />
                    <div>
                        <div>
                            <p>PLANO</p>
                            <Select name="plan" options={plans} />
                        </div>
                        <div>
                            <p>DATA DE INÍCIO</p>
                            <Input name="start_date" />
                        </div>
                        <div>
                            <p>DATA DE TÉRMINO</p>
                            <InputField name="date_end" />
                        </div>
                        <div>
                            <p>VALOR FINAL</p>
                            <InputField name="priceFinish" />
                        </div>
                    </div>
                </PaperInput>
            </Form>
        </Container>
    );
}
