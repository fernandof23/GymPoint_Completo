import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import { parseISO, addMonths } from 'date-fns';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import Swal from 'sweetalert2';

import history from '~/services/history';

import { InputField, PaperInput } from './styles';

import { loadPlansRequest } from '~/store/modules/plans/actions';
import { loadStudentsRequest } from '~/store/modules/students/actions';
import {
    addRegisterRequest,
    loadRegisterRequest,
    updateRegisterRequest,
} from '~/store/modules/register/actions';

import Container from '~/components/Container';
import Header from '~/components/headerAdd';
import Button from '~/components/button';
import ReactAsync from '~/components/ReactAsync';

export default function Add({ match }) {
    const dispatch = useDispatch();

    const [student, setStudent] = useState([]);
    const [searchStudent, setSearchStudent] = useState('');
    const [page, setPage] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [planId, setPlanId] = useState('');
    const [nameEdit, setNameEdit] = useState([]);

    const plans = useSelector(state => state.plans.plans);
    const students = useSelector(state => state.students.students);
    const register = useSelector(state => state.register.register);

    const schema = Yup.object().shape({
        name: Yup.number(),
        plan: Yup.string().required('Plano obrigatorio'),
    });

    const { id } = match.params;

    useEffect(() => {
        const registerE = register.filter(item => item.id === Number(id));

        setNameEdit(registerE.map(item => item.student));
        setPlanId(registerE.map(item => item.plans.id));
    }, [id, register]);

    useEffect(() => {
        document.title = 'GymPoint - Matrículas';
    }, []);

    useEffect(() => {
        dispatch(loadRegisterRequest());
    }, [dispatch]);

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

    function checkRegisterAlready(idUser) {
        const registerAlready = register.filter(
            item => item.student.id === idUser
        );

        if (registerAlready.length > 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ooops...',
                text: 'Aluno já matrículado',
                showConfirmButton: false,
                timer: 2000,
            });
            return true;
        }

        return false;
    }

    function handleSubmit(data) {
        const { name, plan } = data;

        if (!startDate) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ooops...',
                text: 'Selecionar uma Data de Inicio',
                showConfirmButton: false,
                timer: 1000,
            });
            return;
        }

        if (id) {
            const studentEdit = nameEdit.map(item => item.id);

            dispatch(
                updateRegisterRequest(id, studentEdit[0], plan, startDate)
            );
        } else {
            if (checkRegisterAlready(name)) return;

            dispatch(addRegisterRequest(name, plan, startDate));
        }
    }

    console.log('id', id);

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

    const priceTotal = useMemo(() => {
        if (planId) {
            const price = plans.filter(item => Number(planId) === item.id);
            const priceFinish = price.map(item => item.totalPrice);
            return priceFinish;
        }
        return '';
    }, [planId, plans]);

    const dateFinish = useMemo(() => {
        if (startDate) {
            const price = plans.filter(item => Number(planId) === item.id);
            const planDuration = price.map(item => item.duration);
            const end_date = addMonths(parseISO(startDate), planDuration);
            const endDate = dateFnsFormat(new Date(end_date), 'dd/MM/yyyy');
            return endDate;
        }

        return `${dateFnsFormat(new Date('01 / 01 / 1900'), 'MM/dd/yyyy')}`;
    }, [planId, plans, startDate]);

    return (
        <Container maxWidht="900px">
            <Form onSubmit={handleSubmit} schema={schema}>
                <Header>
                    {id ? (
                        <h1>Edição de Matrícula</h1>
                    ) : (
                            <h1>Cadastro de Matrícula</h1>
                        )}

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

                    {id ? (
                        <input
                            name="name2"
                            value={nameEdit.map(item => item.name)}
                            disabled
                        />
                    ) : (
                            <ReactAsync
                                name="name"
                                loadOptions={loadOptions}
                                placeHolder="Selecione o Aluno"
                                onInputChange={loadStudents}
                            />
                        )}

                    <div>
                        <div>
                            <p>PLANO</p>
                            <Select
                                name="plan"
                                options={plans}
                                value={planId}
                                onChange={e => setPlanId(e.target.value)}
                            />

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
                            <InputField
                                name="date_end"
                                value={dateFinish}
                                placeholder=""
                                readOnly
                            />
                        </div>
                        <div>
                            <p>VALOR FINAL</p>
                            <InputField
                                name="priceFinish"
                                value={priceTotal}
                                readOnly
                            />
                        </div>
                    </div>
                </PaperInput>
            </Form>
        </Container>
    );
}
