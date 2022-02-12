import { Bottom, Buttons, Container, Informations } from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCart, BsCartFill } from "react-icons/bs";
import api from "../../services/api";
import { useAuth } from "../../providers/auth";
import { useEffect, useState } from "react";

export default function Product({ product, favorites, cart, icon }) {

  const price = (parseFloat(product.value) / 100).toFixed(2);

  const [favorited, setFavorited] = useState(false);
  const [inCart, setInCart] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (cart && favorites) {
      const findedFavorites = favorites.find(item => item.id === product._id);
      if (findedFavorites) setFavorited(true);

      const findedCart = cart.find(item => item.id === product._id);
      if (findedCart) setInCart(true);
    }
  }, [favorites, product, cart]);

  function addFavorited() {
    api.createFavorite(product._id, user);
    window.location.reload();
  }

  function removeFavorited() {
    api.deleteFavorite(product._id, user);
    window.location.reload();
  }

  function addCart() {
    api.createInCart(product._id, user);
    window.location.reload();
  }

  function removeOnCart() {
    api.deleteInCart(product._id, user);
    window.location.reload();
  }


  return (
    <Container>
      <img src={product.image} alt="image of product" />

      <Informations>
        <h1>{product.name}</h1>
        <span>{product.description}</span>
        <Bottom>
          <span>R$ {price}</span>
          {icon !== false && (<><div>
            {!favorited ? (
              <Buttons><AiOutlineHeart onClick={addFavorited} /></Buttons>
            ) : (
              <Buttons><AiFillHeart onClick={removeFavorited} /></Buttons>
            )}
            {!inCart ? (
              <Buttons><BsCart onClick={addCart} /></Buttons>
            ) : (
              <Buttons><BsCartFill onClick={removeOnCart} /></Buttons>
            )}
          </div></>)}
        </Bottom>
      </Informations>
    </Container>
  );
}
