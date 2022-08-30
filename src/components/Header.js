import React from 'react';
import logo from '../assets/img/logo-DH.png';

function Header() {
return(
    <header class="encabezado">
        <nav id="logo">
        <a href="#"><img src={logo} alt="Logo Digital House"/></a>
        </nav>
        <nav id="opciones">
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#productos">Produtos</a></li>
                <li><a href="#contacto">Contato</a></li>
            </ul>
        </nav>
    </header>
)
}

export default Header;