import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import logo from '~/assets/logo.png';

export default function AllQuestions() {
    return (
        <Background>
            <Text>Teste</Text>
        </Background>
    );
}

AllQuestions.navigationOptions = ({ navigation }) => ({
    title: 'Teste',
});
