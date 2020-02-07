import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: auto;
    max-width: ${props => (props.maxWidht ? props.maxWidht : '1200px;')};
    margin-top: 30px;

    span {
        font-size: 10px;
        color: #ee4d64;
        margin-top: 0px;
    }
`;
