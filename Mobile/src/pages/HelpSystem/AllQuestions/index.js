/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Wrapper, ButtonCheckIn, Content, HeaderContent, Reply, Time, Question, ReplyContent, ContentList } from './styles';

export default function AllQuestions() {
    const [questions, setQuestions] = useState([]);

    const user = useSelector(state => state.user.profile);

    useEffect(() => {
        const { id } = user;
        async function loadQuestion() {
            const response = await api.get(`/students/${id}/help-orders`);

            const data = response.data.map(question => ({
                ...question,
                dateDistance: question.answer
                    ? formatDistance(parseISO(question.updatedAt), new Date(), {
                        addSuffix: true,
                        locale: pt,
                    })
                    : formatDistance(parseISO(question.createdAt), new Date(), {
                        addSuffix: true,
                        locale: pt,
                    }),
            }));

            setQuestions(data);
        }
        loadQuestion();
    }, [user, user.id]);



    console.tron.log(questions);
    return (
        <Background>
            <Wrapper>
                <ButtonCheckIn onPress={() => { }}>
                    Novo Pedido de auxílio
                </ButtonCheckIn>
                <Content
                    data={questions}
                    keyExtractor={question => question.id}
                    renderItem={({ item }) => (
                        <ContentList onPress={() => { }}>
                            <HeaderContent>
                                <ReplyContent>
                                    <Icon name="check-circle" color={item.answer ? "#42CB59" : "#999999"} size={14} />
                                    <Reply answer={item.answer}>{item.answer ? "Respondido" : "Sem Resposta"}</Reply>
                                </ReplyContent>
                                <Time>
                                    {item.dateDistance}
                                </Time>
                            </HeaderContent>
                            <Question>
                                {item.question}
                            </Question>
                        </ContentList>
                    )}
                />



            </Wrapper>
        </Background>
    );
}

AllQuestions.navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />,
});
