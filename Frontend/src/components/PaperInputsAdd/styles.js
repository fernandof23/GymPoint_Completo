import styled from 'styled-components';

export const Paper = styled.div`
    width: 100%;
    background: #fff;
    padding: 10px 30px 30px;
    border-radius: 4px;

    input {
        width: 100%;
        height: 45px;
        border: 1px solid #ddd;
        background: ${props => (props.disabled ? '#ddd' : '#fff')};
        border-radius: 4px;
        padding: 15px;

        > span {
            font-size: 16px;
            color: #999;
        }
    }

    p {
        font-size: 14px;
        font-weight: bold;
        color: #444444;
        margin: 20px 8px 8px;
    }

    div {
        display: flex;
        justify-content: center;

        > input {
            width: 270px;
            margin-bottom: 0px;
            margin-right: 15px;
        }

        > select {
            width: 198px;
            background: none;
            border: 1px solid #ddd;
            height: 45px;
            margin-right: 15px;
        }

        > div {
            display: flex;
            flex-direction: column;
        }
    }
`;
