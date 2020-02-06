import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import history from '~/services/history';

import { Wrapper, Header, PaperInputs } from './styles';

import Button from '~/components/button';

import { createStudentRequest } from '~/store/modules/students/actions';

export default function AddStudents() {
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

    const loading = useSelector(state => state.students.loading);

    const dispatch = useDispatch();
    function handleSubmit(data) {
        const { name, email, age, weight, height } = data;

        dispatch(createStudentRequest(name, email, age, weight, height));
    }

    return (
        <Wrapper>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Header>
                    <h1>Cadastro de Aluno</h1>

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

                <PaperInputs>
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
                </PaperInputs>
            </Form>
        </Wrapper>
    );
}
