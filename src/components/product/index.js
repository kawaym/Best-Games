import { Container, Informations } from "./style";

export default function Product({ name, image, description, price }) {
  const correctedPrice = String(parseFloat(price).toFixed(2)).replace(".", ",");

  return (
    <Container>
      <img src={image} alt="ps5" />
      <Informations>
        <h1>{name}</h1>
        <span>{description}</span>
        <span>R$ {correctedPrice}</span>
      </Informations>
    </Container>
  );
}
