import Product from "../../components/product";
import { CheckoutButton, Container, VoidMessage } from "./style";
import Header from "../../components/general/Header";
import { Oval } from "react-loader-spinner";
import BottomBar from "../../components/general/BottomBar";
import { useShopping } from "../../providers/shopping";
import { Link } from "react-router-dom";

export default function ShoppingPage() {
  const { shopping } = useShopping();

  if (shopping === undefined) {
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
        {shopping.length === 0 && (
          <VoidMessage>Parece que não nada aqui</VoidMessage>
        )}
        {shopping.length !== 0 &&
          shopping.map((product) => {
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
        {shopping.length !== 0 && (
          <Link to="/checkout">
            <CheckoutButton>Confirmar Compra</CheckoutButton>
          </Link>
        )}
      </Container>
      <BottomBar location={"cart"}></BottomBar>
    </>
  );
}
