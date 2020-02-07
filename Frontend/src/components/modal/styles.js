import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 200px;
    max-width: 100%;
    margin: 10px auto;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 1px solid #ee4d64;
    border-radius: 4px;
    padding: 10px;
    color: #000;
    position: fixed;

    p {
        font-size: 15px;
        margin: auto auto 20px;
    }

    div {
        display: flex;
        justify-content: space-around;

        button {
            border: none;
            background: none;
            color: #ee4d64;
        }
    }
`;
