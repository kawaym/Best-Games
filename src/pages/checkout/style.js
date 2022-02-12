import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 40px 10px;
    color: #666;
    gap: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
        width: 100%;

        background-color: lightgray;
        border-radius: 15px;
        padding: 15px;
        gap: 8px;

        display: flex;
        flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 30px;
`;

export const Subtitle = styled.h2`
    font-size: 20px;
`;

export const FinishButton = styled.button`
    width: 100%;
    height: 60px;

    font-size: 25px;

    background-color: #3B7D1F;
    border-radius: 15px;

    &:hover {
        cursor: pointer;
    }
`;