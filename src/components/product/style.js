import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;

    padding: 10px;
    gap: 15px;
    background-color: #fff;
    border-radius: 10px;

    display: flex;

    img {
        width: 90px;
        height: 100%;

        border: 1px solid #666;
        border-radius: 5px;
    }

    span {
        font-size: 12px;
    }
`;

export const Informations = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
`;

