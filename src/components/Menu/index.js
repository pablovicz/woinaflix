import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../asserts/imagem/Logo.png";
import './Menu.css';
import Button from '../Button';




function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img class="Logo" src={Logo} alt="Woinaflix logo" />
            </Link>
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;