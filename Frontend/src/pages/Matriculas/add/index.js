import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Select } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import history from '~/services/history';

import { InputField, PaperInput } from './styles';

import { loadPlansRequest } from '~/store/modules/plans/actions';
import { loadStudentsRequest } from '~/store/modules/students/actions';
import { addRegisterRequest } from '~/store/modules/register/actions';

import Container from '~/components/Container';
import Header from '~/components/headerAdd';
import Button from '~/components/button';
import ReactAsync from '~/components/ReactAsync';

export default function Add() {
    const dispatch = useDispatch();

    const [student, setStudent] = useState([]);
    const [searchStudent, setSearchStudent] = useState('');
    const [page, setPage] = useState(1);
    const [startDate, setStartDate] = useState('');

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
        }, 1500);
    };

    function loadStudents(inputValue) {
        setPage(1);
        setSearchStudent(inputValue);
    }

    function handleSubmit(data) {
        const { name, plan } = data;
        dispatch(addRegisterRequest(name, plan, startDate));
    }

    function parseDate(str, format, locale) {
        const parsed = dateFnsParse(str, format, new Date(), { locale });
        if (DateUtils.isDate(parsed)) {
            return parsed;
        }
        return undefined;
    }

    function formatDate(date, format, locale) {
        setStartDate(dateFnsFormat(date, format, { locale }));
        const formatTrue = 'dd/MM/yyyy';
        return dateFnsFormat(date, formatTrue, { locale });
    }

    return (
        <Container maxWidht="900px">
            <Form onSubmit={handleSubmit}>
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
                        name="name"
                        loadOptions={loadOptions}
                        placeHolder="Selecione o Aluno"
                        onInputChange={loadStudents}
                    />

                    <div>
                        <div>
                            <p>PLANO</p>
                            <Select name="plan" options={plans} />

                            <aside>
                                <p>DATA DE INÍCIO</p>

                                <DayPickerInput
                                    name="start_date"
                                    formatDate={formatDate}
                                    format="yyyy-MM-dd"
                                    parseDate={parseDate}
                                    placeholder={`${dateFnsFormat(
                                        new Date('01 / 01 / 1900'),
                                        'MM/dd/yyyy'
                                    )}`}
                                />
                            </aside>
                        </div>
                        <div>
                            <p>DATA DE TÉRMINO</p>
                            <InputField name="date_end" readOnly />
                        </div>
                        <div>
                            <p>VALOR FINAL</p>
                            <InputField name="priceFinish" readOnly />
                        </div>
                    </div>
                </PaperInput>
            </Form>
        </Container>
    );
}
