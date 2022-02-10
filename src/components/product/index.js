import { Container, Informations } from "./style";
import ps5 from '../../assets/ps5.jpeg';

export default function Product() {

    return (
        <Container>
            <img src={ps5} alt="ps5" />
            <Informations>
                <h1>Playstation 5</h1>
                <span>Console Sony PlayStation 5 - 8K - 825GB - Sem Blu-ray - 110v - Japonês</span>
                <span>R$ 5995,90</span>
            </Informations>
        </Container>
    );
}