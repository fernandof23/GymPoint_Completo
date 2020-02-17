import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import Header from '~/components/Header';

export default function AllQuestions() {
    return (
        <Background>
            <Text>Teste</Text>
        </Background>
    );
}

AllQuestions.navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />,
});
