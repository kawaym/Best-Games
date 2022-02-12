import { Container } from "./style";
import { AiOutlineUser } from 'react-icons/ai';

export default function Header(){
  return (
    <Container>
      <p>Best-Games</p>
      <AiOutlineUser size={30}></AiOutlineUser>
    </Container>
  )
}