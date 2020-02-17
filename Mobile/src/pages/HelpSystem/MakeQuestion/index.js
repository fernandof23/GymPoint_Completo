import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/assets/logo-header.jpg';
import { LogoWrapper } from './styles';

export default function MakeQuestion() {
    return <View />;
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
