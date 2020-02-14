import styled from 'styled-components';

export const Container = styled.div`
    width: 450px;
    max-width: 100%;
    margin: 10px auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    color: #000;
    border: 2px solid #eee;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 30px;

    h1 {
        font-weight: bold;
        font-size: 14px;
    }

    p {
        font-size: 16px;
        color: #666;

        margin: 20px 0px 20px;
    }

    textarea {
        border: 2px solid #eee;
        border-radius: 4px;
        width: 390px;
        height: 127px;
        padding: 10px;
        display: flex;
        margin-top: 5px;

        display: flex;
        flex-direction: column;
        justify-items: self-start;
        justify-self: self-start;
        align-self: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    }

    button {
        width: 390px;
        height: 45px;
        background: #ee4d64;
        border: none;
        border-radius: 4px;
        margin-top: 20px;
        color: #fff;
        font-weight: bold;
    }
`;
