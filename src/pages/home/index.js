import BottomBar from "../../components/general/BottomBar";
import CategoryButton from "../../components/general/CategoryButton";
import Header from "../../components/general/Header";
import { Content } from "./style";
import { FaServer } from "react-icons/fa";
import { RiGameFill } from "react-icons/ri";
import { GiConsoleController } from "react-icons/gi";
import { BsFillDiscFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Content>
        <Link to="/products-consoles">
          <CategoryButton>
            <h1>Consoles</h1>
            <FaServer size={50}></FaServer>
          </CategoryButton>
        </Link>
        <Link to="/products-collectibles">
          <CategoryButton>
            <h1>Colecionáveis</h1>
            <RiGameFill size={50}></RiGameFill>
          </CategoryButton>
        </Link>
        <Link to="/products-accessories">
          <CategoryButton>
            <h1>Acessórios</h1>
            <GiConsoleController size={50}></GiConsoleController>
          </CategoryButton>
        </Link>
        <Link to="/products-games">
          <CategoryButton>
            <h1>Jogos</h1>
            <BsFillDiscFill size={50}></BsFillDiscFill>
          </CategoryButton>
        </Link>
      </Content>
      <BottomBar></BottomBar>
    </>
  );
}
