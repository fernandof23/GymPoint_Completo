import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

            setCheckIn(response.data);
        }

        loadCheck();
    }, [user]);

    async function handleCheckIn() {
        const { id } = user;
        await api.post(`students/${id}/checkins`);
    }

    console.tron.log(checkIn);

    return (
        <Background>
            <Wrapper>
                <ButtonCheckIn onPress={handleCheckIn}>
                    Novo check-in
                </ButtonCheckIn>
                <Content>
                    <CheckBox>
                        <Title>Check-in #1</Title>
                        <Time>Hoje às 15h </Time>
                    </CheckBox>
                </Content>
            </Wrapper>
        </Background>
    );
}

CheckIn.navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />,
});
