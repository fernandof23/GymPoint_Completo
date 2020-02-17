/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    LogoWrapper,
    ContentList,
    HeaderContent,
    Reply,
    Time,
    Question,
} from './styles';

import Logo from '~/assets/logo-header.jpg';

export default function ReplyQuestions({ navigation }) {
    const question = navigation.getParam('item');

    console.tron.log(question);

    return (
        <ContentList>
            <HeaderContent>
                <Reply>PERGUNTA</Reply>
                <Time>{question.dateDistance}</Time>
            </HeaderContent>
            <Question>{question.question}</Question>
            <HeaderContent>
                <Reply>RESPOSTA</Reply>
            </HeaderContent>
            {question.answer ? (
                <Question>{question.answer}</Question>
            ) : (
                    <Reply>Pergunta ainda sem Reposta, Aguarde!</Reply>
                )}
        </ContentList>
    );
}

ReplyQuestions.navigationOptions = ({ navigation }) => ({
    headerTitle: () => (
        <LogoWrapper>
            <Image source={Logo} />
        </LogoWrapper>
    ),
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
        >
            <Icon name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
    ),
});


ReplyQuestions.propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired, getParam: PropTypes.func.isRequired }).isRequired
}
