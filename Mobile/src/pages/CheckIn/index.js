import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function CheckIn() {
    return <Background />;
}

const tabBarIcon = ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
);

CheckIn.navigationOptions = {
    tabBarLabel: 'Check-ins',
    tabBarIcon,
};
