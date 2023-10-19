import React from "react";
import './Header.css'

const Header = () => {
    return (
        <header >
        <ul className={'container'}>
            <li><a href='/' className={'lista'}>Home</a></li>
            <li><a href='/produtos' className={'lista'}>Produtos</a></li>
        </ul>
    </header>);
}
export default Header;
