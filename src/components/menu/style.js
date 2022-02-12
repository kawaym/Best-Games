import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;

    background-color: #D0391C;
    padding: 0px 45px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
`;

export const ButtonCenter = styled(Link)`
    width: 100px;
    height: 100px;

    background-color: lightgray;
    border-radius: 50%;
    border: 2px solid #666;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: auto;

    &:hover{
        cursor: pointer;
    }
`;

export const Button = styled(Link)`
    &:hover{
        cursor: pointer;
    }
`;