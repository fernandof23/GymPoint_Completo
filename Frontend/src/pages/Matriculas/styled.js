import styled from 'styled-components';

export const Content = styled.div`
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
            text-align: left;
        }

        table,
        th:nth-child(2) {
            text-align: center;
            column-width: 140px;
        }

        table,
        th:nth-child(3) {
            text-align: center;
        }

        table,
        th:nth-child(4) {
            text-align: center;
        }

        table,
        th:nth-child(5) {
            text-align: center;
        }

        td,
        th {
            text-align: left;
            padding: 16px;
        }

        td:first-child {
            text-align: left;
        }

        td {
            color: #666;
            text-align: center;
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
