import { BackgroundOpacity, Container, Line, LogoutButton, Menu, Text } from './style';
import { FaServer } from 'react-icons/fa';
import { RiGameFill } from 'react-icons/ri';
import { GiConsoleController } from 'react-icons/gi';
import { BsFillDiscFill } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }

    return (
        <Container>
            <Menu>
                <div>
                    <h1>Best - Game</h1>
                    <Line />
                    <Text to='/consoles'>Consoles <FaServer /></Text>
                    <Line />
                    <Text to='/consoles'>Jogos<BsFillDiscFill /></Text>
                    <Line />
                    <Text to='/consoles'>Colecionáveis<RiGameFill /></Text>
                    <Line />
                    <Text to='/consoles'>Acessórios<GiConsoleController /></Text>
                    <Line />
                </div>

                <div>
                    <LogoutButton onClick={logout}><AiOutlineLogout />Logout</LogoutButton>
                </div>

            </Menu>

            <BackgroundOpacity />
        </Container >
    );
}