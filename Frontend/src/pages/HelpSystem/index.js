import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    loadQuestionRequest,
    answerRequest,
} from '~/store/modules/helporders/actions';
import Container from '~/components/Container';
import Content from '~/components/Content';
import DivTop from '~/components/DivTop';

import { ContainerModal } from './styles';

export default function HelpSystem() {
    const [questions, setQuestions] = useState([]);
    const [student, setStudent] = useState([]);
    const [awnser, setAwnser] = useState([]);
    const [answer, setAnswer] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadQuestionRequest());
    }, [dispatch]);

    const question = useSelector(state => state.questions.questions);

    useEffect(() => {
        setQuestions(question);
    }, [question]);

    function showDetails(item) {
        setStudent(item.student);
        setAwnser(item._doc);
        setModalOpen(!modalOpen);
    }

    useEffect(() => {
        document.title = 'GymPoint - Help System';
    }, []);

    function handleSubmit(e) {
        const id = e._id;
        dispatch(answerRequest(id, answer));
        setModalOpen(!modalOpen);
    }

    return (
        <Container maxWidht="700px">
            <DivTop>
                <h1>Pedidos de auxílio</h1>
            </DivTop>

            <Content inputColor="#4d85ee">
                <table>
                    <thead>
                        <th>ALUNO</th>
                    </thead>
                    <tbody>
                        {questions.map(item => (
                            <tr key={item._doc._id}>
                                <td>
                                    {item.student.map(studen => studen.name)}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => showDetails(item)}
                                    >
                                        responder
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {modalOpen ? (
                    <ContainerModal>
                        <div>
                            <h1>
                                Pergunta do aluno{' '}
                                {student.map(item => item.name)}{' '}
                            </h1>
                            <p>{awnser.question}</p>
                        </div>

                        <div>
                            <h1>SUA RESPOSTA:</h1>
                            <textarea
                                type="text"
                                name="answer"
                                onChange={e => setAnswer(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={() => handleSubmit(awnser)}
                        >
                            Responder Aluno
                        </button>
                        <button
                            exit
                            type="button"
                            onClick={() => setModalOpen(!modalOpen)}
                        >
                            Sair
                        </button>
                    </ContainerModal>
                ) : null}
            </Content>
        </Container>
    );
}
