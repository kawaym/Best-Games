import { Container, Informations, Buttons } from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCart, BsCartFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Product({
  name,
  image,
  description,
  price,
  favorite,
  cart,
  home,
}) {
  const correctedPrice = String(parseFloat(price).toFixed(2)).replace(".", ",");

  const [isFavorite, setIsFavorite] = useState(<AiOutlineHeart size={10} />);
  const [isInCart, setIsInCart] = useState(<BsCart size={30} />);

  useEffect(() => {
    if (favorite) {
      setIsFavorite(<AiFillHeart size={30} />);
    }
    if (cart) {
      setIsInCart(<BsCartFill size={30} />);
    }
  }, []);

  return (
    <Container>
      <img src={image} alt="ps5" />
      <Informations>
        <h1>{name}</h1>
        <span>{description}</span>
        <span>R$ {correctedPrice}</span>
        <Buttons>
          {home && isFavorite}
          {home && isInCart}
        </Buttons>
      </Informations>
    </Container>
  );
}
