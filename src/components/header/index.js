import { Container } from "./style";
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useState } from "react";
import Navbar from '../navbar/index';

export default function NavBar() {

  const [navbar, setNavbar] = useState(false);

  return (
    <Container>
      <NavBar />
      <AiOutlineMenu size={30} onClick={() => setNavbar(true)} />
      <p>Best-Games</p>
      <AiOutlineUser size={30} />
    </Container>
  )
}