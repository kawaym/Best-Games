import { Container, Informations, Buttons } from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCart, BsCartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useFavorites } from "../../providers/favorites";
import { useShopping } from "../../providers/shopping";
import { useAuth } from "../../providers/auth";

export default function Product({ id, name, image, description, price, home }) {
  const correctedPrice = String(parseFloat(price).toFixed(2)).replace(".", ",");

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const { favorites, receiveFavorites } = useFavorites();
  const { shopping, receiveShopping } = useShopping();
  const { user } = useAuth();

  function checkPresence(id) {
    const presenceFavorite =
      favorites?.filter((item) => item.id === id).length > 0;
    const presenceShopping =
      shopping?.filter((item) => item.id === id).length > 0;

    if (presenceFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    if (presenceShopping) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

    return;
  }
  useEffect(() => checkPresence(id));
  useEffect(() => checkPresence(id), [favorites, shopping]);

  function handleSelection(type) {
    if (type === "favorite") {
      if (!isFavorite) {
        const promise = api.createFavorite(id, user.user);
        promise.then(receiveFavorites());
      }
      if (isFavorite) {
        const promise = api.deleteFavorite(id, user.user);
        promise.then(receiveFavorites());
      }
    } else {
      if (!isInCart) {
        const promise = api.createInCart(id, user.user);
        promise.then(receiveShopping());
      }
      if (isInCart) {
        const promise = api.deleteInCart(id, user.user);
        promise.then(receiveShopping());
      }
    }
  }
  return (
    <Container>
      <img src={image} alt="ps5" />
      <Informations>
        <h1>{name}</h1>
        <span>{description}</span>
        <span>R$ {correctedPrice}</span>
        <Buttons>
          {home && isFavorite && (
            <AiFillHeart
              size={30}
              onClick={() => handleSelection("favorite")}
            />
          )}
          {home && !isFavorite && (
            <AiOutlineHeart
              size={30}
              onClick={() => handleSelection("favorite")}
            />
          )}
          {home && isInCart && (
            <BsCartFill size={30} onClick={() => handleSelection("shopping")} />
          )}
          {home && !isInCart && (
            <BsCart size={30} onClick={() => handleSelection("shopping")} />
          )}
        </Buttons>
      </Informations>
    </Container>
  );
}
