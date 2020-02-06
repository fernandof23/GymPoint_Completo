import styled from 'styled-components';

export const Button = styled.button`
    border: 0;
    background: ${props => (props.background ? props.background : '#ee4d64')};

    border-radius: ${props =>
        props.borderRadius ? props.borderRadius : '4px'};

    width: ${props => (props.width ? props.width : '142px')};

    height: ${props => (props.height ? props.height : '36px')};

    color: ${props => (props.color ? props.color : '#fff')};

    font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};

    display: flex;

    align-items: center;

    justify-content: space-around;

    padding: 0 13px;
`;
