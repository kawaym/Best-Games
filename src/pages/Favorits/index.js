import Product from "../../components/product";
import { Container, VoidMessage } from "./style";
import Header from "../../components/general/Header";
import { Oval } from "react-loader-spinner";
import { useFavorites } from "../../providers/favorites";
import BottomBar from "../../components/general/BottomBar";

export default function FavoritsPage() {
  const { favorites } = useFavorites();

  if (favorites === undefined) {
    return (
      <>
        <Header></Header>
        <Container>
          <Oval color="#00BFFF" height={80} width={80} />
        </Container>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <Container>
        {favorites.length === 0 && (
          <VoidMessage>Parece que não nada aqui</VoidMessage>
        )}
        {favorites.length !== 0 &&
          favorites.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                home={false}
              />
            );
          })}
      </Container>
      <BottomBar></BottomBar>
    </>
  );
}
