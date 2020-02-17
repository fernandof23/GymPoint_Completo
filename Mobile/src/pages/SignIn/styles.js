import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;

export const Image = styled.Image``;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;

export const ContainerInput = styled.View`
    padding: 0 15px;
    height: 46px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
`;
export const FormInput = styled.TextInput`
    flex: 1;
    font-size: 15px;
    margin-left: 10px;
    color: #999;
`;
