import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 10px;
    background: #fff;
    padding: 20px;
    border-radius: 4px;

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
            color: ${props =>
        props.inputColor ? props.inputColor : '#de3b3b'};
            padding-left: 23px;
        }
    }
`;
