import { CartButton, Container, FavoritesButton, HomeButton } from "./style";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <Container>
      <Link to="/home">
        <HomeButton>
          <AiOutlineHome size={50}></AiOutlineHome>
        </HomeButton>
      </Link>
      <CartButton>
        <BsCart size={60}></BsCart>
      </CartButton>
      <Link to="/favorits">
        <FavoritesButton>
          <AiOutlineHeart size={50}></AiOutlineHeart>
        </FavoritesButton>
      </Link>
    </Container>
  );
}
