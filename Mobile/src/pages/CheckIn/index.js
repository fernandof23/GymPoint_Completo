import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
    Wrapper,
    ButtonCheckIn,
    Content,
    CheckBox,
    Title,
    Time,
} from './styles';

export default function CheckIn() {
    const [checkIn, setCheckIn] = useState([]);

    const user = useSelector(state => state.user.profile);

    useEffect(() => {
        const { id } = user;
        async function loadCheck() {
            const response = await api.get(`students/${id}/checkins`);

            const data = response.data.map(check => ({
                ...check,
                timeDistance: formatDistance(
                    parseISO(check.createdAt),
                    new Date(),
                    { addSuffix: true, locale: pt }
                ),
            }));

            setCheckIn(data);
        }

        loadCheck();
    }, [user]);

    async function handleCheckIn() {
        try {
            const { id } = user;
            await api.post(`students/${id}/checkins`);
        } catch (err) {
            Alert.alert('Check-ins maximo efetuado no dia!');
        }
    }

    console.tron.log(checkIn);
    return (
        <Background>
            <Wrapper>
                <ButtonCheckIn onPress={handleCheckIn}>
                    Novo check-in
                </ButtonCheckIn>
                <Content>
                    {checkIn.map(check => (
                        <CheckBox keyExtractor={check.id}>
                            <Title>
                                Check-in #{checkIn.indexOf(check) + 1}
                            </Title>
                            <Time>{check.timeDistance} </Time>
                        </CheckBox>
                    ))}
                </Content>
            </Wrapper>
        </Background>
    );
}

CheckIn.navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />,
});
