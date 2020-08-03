import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './ButtonLink';
import { Link } from 'react-router-dom';
import Button from '../Button';
 
function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="Logo homeflix" className="Logo" />
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;