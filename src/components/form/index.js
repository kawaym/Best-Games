import { Container } from "./style";


export default function Form({ children, action }) {

    return (
        <Container onSubmit={e => action(e)}>
            {children}
        </Container>
    );
}