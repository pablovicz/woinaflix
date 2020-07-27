import React from 'react';
import Logo from "../../asserts/imagem/Logo.png";
import './Menu.css';
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img class="Logo" src={Logo} alt="Woinaflix logo" />
            </a>
            
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;