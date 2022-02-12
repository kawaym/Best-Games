import { ImPacman } from "react-icons/im";
import { FaServer } from "react-icons/fa";
import { BsFillDiscFill } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";

export const sessions = [
    {
        name: "Consoles",
        icon: <FaServer size={40} />,
        path: "/consoles"
    },
    {
        name: "Jogos",
        icon: <BsFillDiscFill size={40} />,
        path: "/games"
    },
    {
        name: "Colecionáveis",
        icon: <ImPacman size={40} />,
        path: "/collectibles"
    },
    {
        name: "Acessórios",
        icon: <GiConsoleController size={50} />,
        path: "/accessories"
    }
];