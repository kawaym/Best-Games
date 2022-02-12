import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`;

export const BackgroundOpacity = styled.div`
    width: 50vw;
    height: 100vh;

    background-color: #000000;
    opacity: 0.5;
`;

export const Menu = styled.div`
    width: 50vw;
    height: 100vh;

    background-color: #CF0000;
    box-shadow: 3px 4px 20px black;
    gap: 3px;
    padding: 50px 25px;
    color: #fff;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-weight: bold;
        font-size: 25px;
    }

    div {
        width: 100%;
    }

`;

export const Text = styled.div`
    width: auto;
    padding: 10px;
    text-align: left;
    color: #fff;

    gap: 5px;
    display: flex;

    &:hover {
        cursor: pointer;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 2px;

    background-color: #666;
`;

export const LogoutButton = styled.button`
    width: 100px;
    height: 25px;

    gap: 10px;
    border-radius: 5px;
    align-self: left;

    display:flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

