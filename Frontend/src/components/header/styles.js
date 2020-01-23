import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 64px;
    padding: 0 30px;
    background: #fff;
`;

export const Content = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;

        img {
            padding-right: 30px;
            border-right: 1px solid #ddd;
        }
    }

    aside {
        text-align: right;
        p {
            font-size: 14px;
            color: #666;
        }

        button {
            color: #de3b3b;
            border: none;
            background: none;
            font-size: 13px;
            transition: font-size 0.2s;

            &:hover {
                font-size: 14px;
            }
        }
    }
`;
export const Botoes = styled.div`
    margin-left: 30px;

    a {
        font-size: 15px;
        font-weight: bold;
        color: #999;

        & + a {
            padding-left: 20px;
        }

        transition: color 0.2s;

        &:hover {
            color: #444;
        }
    }
`;
