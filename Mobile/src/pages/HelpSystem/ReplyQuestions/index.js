import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { LogoWrapper } from './styles';

import Logo from '~/assets/logo-header.jpg';

export default function ReplyQuestions() {
    return <View />;
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
