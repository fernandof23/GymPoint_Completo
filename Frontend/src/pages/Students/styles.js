import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: auto;
    max-width: 1200px;
    margin-top: 30px;
`;

export const DivTop = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 24px;
        color: #444;
    }

    div {
        display: flex;
        button {
            border: 0;
            background: #ee4d64;
            border-radius: 4px;
            width: 142px;
            height: 36px;
            color: #fff;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 0 13px;
        }

        aside {
            display: flex;
            align-items: center;
            border: 1px solid #eee;
            background: #fff;
            border-radius: 4px;
            margin-left: 16px;
            padding: 0 10px;

            input {
                border: none;
                height: 36px;

                &::placeholder {
                    color: #999;
                }
            }
        }
    }
`;

export const Content = styled.div`
    margin: 20px 10px;
    background: #fff;
    padding: 20px;

    table {
        width: 100%;
        border-collapse: collapse;

        table,
        th {
            font-size: 16px;
            color: #444;
        }

        table,
        th:first-child {
            column-width: 300px;
        }

        td,
        th {
            text-align: left;
            padding: 16px;
        }

        td {
            color: #666;
        }

        td:nth-child(3) {
            padding-left: 30px;
        }

        td:nth-child(4) {
            display: flex;
            justify-content: flex-end;
        }

        tr + tr {
            border-top: 1px solid #eee;
        }

        tr:hover {
            background: #eee;
        }

        a {
            color: #4d85ee;
            font-size: 15px;
        }

        button {
            background: none;
            border: 0;
            color: #de3b3b;
            padding-left: 23px;
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;

    div {
        margin: auto 20px;
    }

    button {
        border: none;
        background: none;
    }
`;
