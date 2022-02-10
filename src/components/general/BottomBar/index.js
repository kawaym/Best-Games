import { CartButton, Container, FavoritesButton, HomeButton } from "./style";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

export default function BottomBar() {
  return (
    <Container>
      <HomeButton>
        <AiOutlineHome size={50}></AiOutlineHome>
      </HomeButton>
      <CartButton>
        <BsCart size={60}></BsCart>
      </CartButton>
      <FavoritesButton>
        <AiOutlineHeart size={50}></AiOutlineHeart>
      </FavoritesButton>
    </Container>
  );
}
