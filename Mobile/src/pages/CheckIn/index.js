import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function CheckIn() {
    return <Background />;
}

CheckIn.navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />,
});
