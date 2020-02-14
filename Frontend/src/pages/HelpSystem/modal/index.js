import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function Modal({ details, question }) {
    const [student, setStudent] = useState([]);
    const [awnser, setAnswer] = useState([]);

    useEffect(() => {
        setAnswer(details._doc);
        setStudent(details.student);
    }, [details._doc, details.student]);

    return (
        <Container>
            <div>
                <h1>Pergunta do aluno {student.map(item => item.name)} </h1>
                <p>{awnser.question}</p>
            </div>

            <div>
                <h1>SUA RESPOSTA:</h1>
                <textarea type="text" name="answer" />
            </div>
            <button type="submit">Responder Aluno</button>
            <button exit type="button" onClick={}>
                Sair
            </button>
        </Container>
    );
}
