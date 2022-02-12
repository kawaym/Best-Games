import { useEffect, useState } from "react";
import BottomBar from "../../components/general/BottomBar";
import Header from "../../components/general/Header";
import api from "../../services/api";
import { Content, VoidMessage } from "./style";
import Product from "../../components/product";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";


export default function ProductPage() {
  const params = useParams();
  const [products, setProducts] = useState(undefined);
  

  useEffect(() => {
    const promise = api.getProducts(params.category);
    promise.then((response) => {
      setProducts(response.data);
    });
  }, []);
  if (products === undefined) {
    return (
      <>
        <Header></Header>
        <Content>
          <Oval color="#00BFFF" height={80} width={80} />
        </Content>
        <BottomBar></BottomBar>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <Content>
        {products.length === 0 && <VoidMessage>Parece que não há nada aqui</VoidMessage>}
        {products.length !== 0 &&
          products.map((product) => {
            return <Product
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              home={true}
            />;
          })}
      </Content>
      <BottomBar></BottomBar>
    </>
  );
}
