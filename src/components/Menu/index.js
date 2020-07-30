import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './ButtonLink';
import Button from '../Button';
 
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Logo homeflix" className="Logo" />
            </a>
            <Button href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;