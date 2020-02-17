import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Wrapper = styled.View`
    flex: 1;
    padding: 20px;
`;

export const ButtonCheckIn = styled(Button)`
    margin-bottom: 20px;
`;

export const Content = styled.View`
    flex: 1;
    background: #f5f5f5;
`;

export const CheckBox = styled.View`
    border-radius: 4px;
    padding: 20px;
    background: #fff;
    margin-bottom: 5px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #444;
`;

export const Time = styled.Text`
    font-size: 14px;
    color: #666;
`;
