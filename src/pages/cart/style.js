import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 10px;
    margin: 80px 0px;
    gap: 10px;

    display: flex;
    flex-direction: column;
`;

export const BuyButton = styled.button`
    width: 100%;
    height: 60px;

    background-color: #3B7D1F;
    border-radius: 15px;

    font-size: 20px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;