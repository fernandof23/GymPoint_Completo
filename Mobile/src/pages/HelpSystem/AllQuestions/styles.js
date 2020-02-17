import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Wrapper = styled.View`
    padding: 20px;
`;

export const ButtonCheckIn = styled(Button)`
    margin-bottom: 20px;
`;

export const Content = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const ContentList = styled(RectButton)`
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 10px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 15px;
`;

export const ReplyContent = styled.View`
    flex-direction: row;

    align-items: center;
`;
export const Reply = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #999;
    margin-left: 5px;
`;

export const Time = styled.Text`
    font-size: 14px;
    text-align: right;
    color: #666;
`;

export const Question = styled.Text`
    font-size: 14px;
    color: #666;
`;
