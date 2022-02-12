import Header from "../../components/haeder";
import MenuBottom from "../../components/menu";
import SessionsButton from "../../components/sessionsButton";
import { sessions } from "../../components/sessionsButton/sessionsArray";
import { Container } from "./style";


export default function Home() {

  return (
    <Container>
      <Header text="Best Games" />
      {sessions.map((session, index) => <SessionsButton key={index} session={session} />)}
      <MenuBottom />
    </Container>
  );
}
