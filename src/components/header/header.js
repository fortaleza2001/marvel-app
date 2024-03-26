import { Menu } from "semantic-ui-react";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import './header.scss'; // Importa el archivo header.scss

export default function Header() {
    
    const location = useLocation();
    const lastPathSegment = location.pathname.split('/').pop(); // Obtiene la última parte de la URL
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(lastPathSegment);

    const handleItemClick = (name) => {
        setActiveItem(name);
        navigate(name.toLowerCase());
    };

    return (
        <div className="header-menu">
            <Menu secondary>
                <Menu.Item name="Inicio" active={activeItem === "Inicio"} onClick={() => handleItemClick("Inicio")} />
                <Menu.Item name="Series" active={activeItem === "Series"} onClick={() => handleItemClick("Series")} />
                <Menu.Item name="Comics" active={activeItem === "Comics"} onClick={() => handleItemClick("Comics")} />
            </Menu>
        </div>
    );
}
