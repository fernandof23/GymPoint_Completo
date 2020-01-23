import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #ee4d64;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    text-align: center;
    background: #fff;
    width: 100%;
    max-width: 400px;
    border-radius: 4px;
    padding: 50px;

    @media (max-width: 500px) {
        padding: 30px;
        max-width: 350px;
    }

    img {
        width: 150px;
    }
    form {
        display: flex;
        flex-direction: column;
        margin: 40px auto;

        span {
            align-self: flex-start;
            margin-bottom: 8px;
            margin-top: 20px;
            font-weight: bold;
            color: #ee4d64;
        }

        input {
            border: 1px solid #eee;
            height: 45px;
            padding: 0 15px;
            border-radius: 4px;
        }

        button {
            border: none;
            background: #ee4d64;
            height: 45px;
            margin-top: 15px;
            border-radius: 4px;
            color: #fff;
            font-weight: bold;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#ee4d64')};
            }
        }
    }

    > a {
        font-size: 15px;
        color: #ee4d64;
        transition: font-size 0.2s;
        opacity: 0.8;

        &:hover {
            color: ${darken(0.05, '#ee4d64')};
            font-size: 18px;
            opacity: 1;
        }
    }
`;
