import { BackgroundOpacity, Container, Line, LogoutButton, Menu, Text } from './style';
import { FaServer } from 'react-icons/fa';
import { RiGameFill } from 'react-icons/ri';
import { GiConsoleController } from 'react-icons/gi';
import { BsFillDiscFill } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


export default function Navbar({ setShowNav }) {

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }

    function pageChange(path) {
        navigate(path);
        window.location.reload();
    }

    return (
        <Container>
            <Menu>
                <div>
                    <h1>Best - Game</h1>
                    <Line />
                    <Text onClick={() => pageChange("/products/consoles")} >
                        Consoles <FaServer />
                    </Text>

                    <Line />
                    <Text onClick={() => pageChange("/products/games")}>
                        Jogos <BsFillDiscFill />
                    </Text>

                    <Line />
                    <Text onClick={() => pageChange("/products/collectibles")}>
                        Colecionáveis<RiGameFill />
                    </Text>

                    <Line />
                    <Text onClick={() => pageChange("/products/accessories")}>
                        Acessórios<GiConsoleController />
                    </Text>
                    <Line />
                </div>

                <div>
                    <LogoutButton onClick={logout}><AiOutlineLogout />Logout</LogoutButton>
                </div>

            </Menu>

            <BackgroundOpacity onClick={() => setShowNav(false)} />
        </Container >
    );
}