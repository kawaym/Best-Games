import { useEffect, useState } from "react";
import BottomBar from "../../components/general/BottomBar";
import NavBar from "../../components/general/NavBar";
import api from "../../services/api";
import { Content, VoidMessage } from "./style";
import Product from "../../components/product";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { useFavorites } from "../../providers/favorites";
import { useShopping } from "../../providers/shopping";

export default function ProductPage() {
  const params = useParams();
  const [products, setProducts] = useState(undefined);
  const {favorites} = useFavorites();
  const {shopping} = useShopping();

  console.log(favorites);
  console.log(shopping)

  useEffect(() => {
    const promise = api.getProducts(params.category);
    promise.then((response) => {
      setProducts(response.data);
    });
  }, []);
  if (products === undefined || favorites === undefined || shopping === undefined) {
    return (
      <>
        <NavBar></NavBar>
        <Content>
          <Oval color="#00BFFF" height={80} width={80} />
        </Content>
        <BottomBar></BottomBar>
      </>
    );
  }

  return (
    <>
      <NavBar></NavBar>
      <Content>
        {products.length === 0 && <VoidMessage>Parece que não há nada aqui</VoidMessage>}
        {products.length !== 0 &&
          products.map((product) => {
            return <Product
              key={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              favorite={favorites.filter((item) => item.id === product.id).length > 0}
              cart={shopping.filter((item) => item.id === product.id).length > 0}
              home={true}
            />;
          })}
      </Content>
      <BottomBar></BottomBar>
    </>
  );
}
