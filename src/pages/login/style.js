import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #CF0000;
    gap: 25px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled(Link)`
    color: #fff;
`;