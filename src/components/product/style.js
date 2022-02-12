import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    padding: 10px;
    gap: 15px;
    background-color: lightgray;
    border-radius: 10px;

    display: flex;
    position: relative;

    img {
        width: 90px;

        border: 1px solid #666;
        border-radius: 5px;
    }

    span {
        font-size: 12px;
    }
`;

export const Informations = styled.div`
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
`;

export const Buttons = styled.div`
    display: flex;

    bottom: 7px;
    right: 15px;

    gap: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        gap: 5px;
    }
`;