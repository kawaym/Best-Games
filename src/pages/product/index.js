import BottomBar from "../../components/general/BottomBar";
import NavBar from "../../components/general/NavBar";
import { Content, IndividualProduct } from "./style";

export default function Product() {
  return (
    <>
      <NavBar></NavBar>
      <Content>
        <IndividualProduct>
          <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" />
          <div>
            <h1>Título do Produto</h1>
            <h2>Valor</h2>
          </div>
        </IndividualProduct>
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
        <IndividualProduct />
      </Content>
      <BottomBar></BottomBar>
    </>
  );
}
