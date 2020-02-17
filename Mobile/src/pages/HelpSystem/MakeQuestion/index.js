import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Logo from '~/assets/logo-header.jpg';
import { LogoWrapper, Container, InputText, SubmitButton } from './styles';

export default function MakeQuestion({ navigation }) {
    const [question, setQuestion] = useState('');

    const user = navigation.getParam('user');

    async function handleSubmit() {
        const { id } = user;

        if (!question) {
            Alert.alert('Escreva sua duvida, antes de enviar');
        } else {
            await api.post(`students/${id}/help-orders`, { question });

            navigation.navigate('AllQuestions');
        }
    }
    return (
        <Container>
            <InputText
                placeholder="Inclua seu pedido de auxílio"
                multiline
                numberOfLines={14}
                onChangeText={setQuestion}
                value={question}
            />

            <SubmitButton onPress={handleSubmit}>Enviar Pedido</SubmitButton>
        </Container>
    );
}

MakeQuestion.navigationOptions = ({ navigation }) => ({
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

MakeQuestion.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired,
    }).isRequired,
};
