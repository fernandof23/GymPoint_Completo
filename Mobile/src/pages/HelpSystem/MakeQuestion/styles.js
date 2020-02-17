import styled from 'styled-components/native';
import Button from '~/components/Button';

export const LogoWrapper = styled.View``;

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`;
export const InputText = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
`;

export const SubmitButton = styled(Button)``;
