import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import history from '~/services/history';

// import { PaperInputs } from './styles';

import Button from '~/components/button';
import Container from '~/components/Container';
import Header from '~/components/headerAdd';
import PaperInput from '~/components/PaperInputsAdd';

import {
    createStudentRequest,
    loadStudentToEdit,
    uploadStudentRequest,
} from '~/store/modules/students/actions';

export default function AddStudents({ match }) {
    const dispatch = useDispatch();
    const [student, setStudent] = useState(null);
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
            .email('Insira um e-mail Valido')
            .required('E - mail Obrigatório'),
        age: Yup.string('Idade Somente em Numeros').required('Insira a Idade'),
        weight: Yup.string('Peso em Numero Obrigatório').required(
            'Peso obrigatório'
        ),
        height: Yup.string().required('Altura Obrigatória'),
    });

    useEffect(() => {
        dispatch(loadStudentToEdit(match.params.id));
    }, [dispatch, match.params.id]);

    const loading = useSelector(state => state.students.loading);
    const singleStudant = useSelector(state => state.students.StudentEdit);
    const activeEdit = useSelector(state => state.students.activeEdit);

    useEffect(() => {
        setStudent(singleStudant);
    }, [singleStudant]);

    function handleSubmit(data) {
        const { name, email, age, weight, height } = data;

        if (activeEdit) {
            dispatch(
                uploadStudentRequest(
                    match.params.id,
                    name,
                    email,
                    age,
                    weight,
                    height
                )
            );
        } else {
            dispatch(createStudentRequest(name, email, age, weight, height));
        }
    }

    return (
        <Container maxWidht="900px">
            <Form
                schema={schema}
                onSubmit={handleSubmit}
                initialData={singleStudant ? student : null}
            >
                <Header>
                    {activeEdit ? (
                        <h1>Edição de Aluno</h1>
                    ) : (
                            <h1>Cadastro de Aluno</h1>
                        )}

                    <aside>
                        <div>
                            <Button
                                width="112px"
                                height="36px"
                                background="#CCCCCC"
                                onClick={() =>
                                    history.push('/dashboard/students')
                                }
                            >
                                <MdKeyboardArrowLeft size={20} color="#fff" />
                                VOLTAR
                            </Button>
                        </div>
                        <div>
                            <Button width="112px" height="36px" type="submit">
                                <MdCheck size={20} color="#fff" />
                                {loading ? 'SALVANDO...' : 'SALVAR'}
                            </Button>
                        </div>
                    </aside>
                </Header>

                <PaperInput>
                    <p>NOME COMPLETO</p>
                    <Input name="name" type="text" placeholder="John Doe" />
                    <p>ENDEREÇO DE E-MAIL</p>
                    <Input
                        name="email"
                        type="email"
                        placeholder="exemplo@email.com"
                    />

                    <div>
                        <div>
                            <p>IDADE</p>
                            <Input name="age" type="number" min="0" max="100" />
                        </div>
                        <div>
                            <p>PESO (em kg)</p>
                            <Input name="weight" type="float" />
                        </div>
                        <div>
                            <p>ALTURA</p>
                            <Input name="height" type="float" />
                        </div>
                    </div>
                </PaperInput>
            </Form>
        </Container>
    );
}
