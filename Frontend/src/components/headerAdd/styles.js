import styled from 'styled-components';

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
