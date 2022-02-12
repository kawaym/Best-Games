import { Link } from "react-router-dom";
import styled from "styled-components";


export default function SessionsButton({ session }) {

    return (
        <Container to={`/products${session.path}`} >
            {session.icon}
            <span>{session.name}</span>
        </Container>
    );
}

const Container = styled(Link)`
    width: 150px;
    height: 200px;

    background-color: lightgray;
    border-radius: 15px;
    border: 1px solid #666;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        font-size: 20px;
    }

    &:hover {
        cursor: pointer;
    }
`;