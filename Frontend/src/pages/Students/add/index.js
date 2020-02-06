import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import history from '~/services/history';

import { Wrapper, Header } from './styles';

import Button from '~/components/button';

export default function AddStudents() {
    return (
        <Wrapper>
            <Header>
                <h1>Cadastro de Aluno</h1>

                <aside>
                    <div>
                        <Button
                            width="112px"
                            height="36px"
                            background="#CCCCCC"
                            onClick={() => history.push('/dashboard/students')}
                        >
                            <MdKeyboardArrowLeft size={20} color="#fff" />
                            VOLTAR
                        </Button>
                    </div>
                    <div>
                        <Button width="112px" height="36px">
                            <MdCheck size={20} color="#fff" />
                            SALVAR
                        </Button>
                    </div>
                </aside>
            </Header>

            <Form>
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
                        <Input name="age" type="number" />
                    </div>
                    <div>
                        <p>PESO (em kg)</p>
                        <Input name="weight" />
                    </div>
                    <div>
                        <p>ALTURA</p>
                        <Input name="height" />
                    </div>
                </div>
            </Form>
        </Wrapper>
    );
}
