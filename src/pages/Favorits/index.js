import FavoritProduct from "../../components/favoritPRoduct";
import { Container } from "./style";


export default function FavoritsPage() {

    return (
        <Container>
            <FavoritProduct />
            <FavoritProduct />
            <FavoritProduct />
            <FavoritProduct />
        </Container>
    );
}