import { Container, Button } from "./style";
import { AiOutlineMenu } from 'react-icons/ai';
import Navbar from "../navbar";
import { useState } from "react";

export default function Header({ text }) {

  const [showNav, setShowNav] = useState(false);

  return (
    <Container>
      {showNav && <Navbar setShowNav={setShowNav} />}

      <Button>
        <AiOutlineMenu size={30} onClick={() => setShowNav(true)} />
      </Button>

      <h1>{text}</h1>
    </Container>
  )
}