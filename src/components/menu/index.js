import { Button, ButtonCenter, Container } from "./style";
import { AiFillHeart } from "react-icons/ai";
import { BsCart4, BsFillHouseDoorFill } from "react-icons/bs";


export default function MenuBottom() {

    return (
        <Container>
            <Button to="/home" >
                <BsFillHouseDoorFill size={50} />
            </Button>

            <ButtonCenter to="/cart" >
                <BsCart4 size={50} />
            </ButtonCenter>

            <Button to="/favorites" >
                <AiFillHeart size={50} />
            </Button>
        </Container>
    );
}