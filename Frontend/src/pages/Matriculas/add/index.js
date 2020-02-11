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
import ReactAsync from '~/components/ReactAsync';

export default function Add() {
    const dispatch = useDispatch();

    const [student, setStudent] = useState([]);
    const [searchStudent, setSearchStudent] = useState('');
    const [page, setPage] = useState(1);

    const plans = useSelector(state => state.plans.plans);
    const students = useSelector(state => state.students.students);

    useEffect(() => {
        dispatch(loadPlansRequest());
        dispatch(loadStudentsRequest(searchStudent, page));
    }, [dispatch, page, searchStudent]);

    useEffect(() => {
        const filterStudents = students.map(item => ({
            ...item,
            value: item.id,
            label: item.name,
        }));

        setStudent(filterStudents);
    }, [students]);

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(student);
        }, 10);
    };

    function loadStudents(inputValue) {
        setPage(1);
        setSearchStudent(inputValue);
    }

    function loadInput(inputValue) {
        console.log(inputValue);
    }

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
                    <ReactAsync
                        name="alunoSelect"
                        loadOptions={loadOptions}
                        placeHolder="Selecione o Aluno"
                        onInputChange={loadStudents}
                        handleInputChange={loadInput}
                    />

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
