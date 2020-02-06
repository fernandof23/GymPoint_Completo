import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;

    margin: 35px auto;

    max-width: 900px;

    form {
        width: 100%;
        background: #fff;
        padding: 30px;

        input {
            width: 840px;
            height: 45px;
            border: 1px solid #ddd;
            background: #fff;
            border-radius: 4px;
            margin-bottom: 20px;
            padding: 15px;

            span {
                font-size: 16px;
                color: #999;
            }
        }

        p {
            font-size: 14px;
            font-weight: bold;
            color: #444444;
            margin-bottom: 8px;
        }

        div {
            display: flex;

            > input {
                width: 270px;
                margin-bottom: 0px;
                margin-right: 15px;
            }

            > div {
                display: flex;
                flex-direction: column;
            }
        }
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
        font-size: 24px;
        font-weight: bold;
        color: #444;
    }

    aside {
        display: flex;

        div {
            margin-left: 16px;
        }
    }
`;
