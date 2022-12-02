import React from 'react';
import Logo from './Header/Logo.jsx';
import Menu from './Header/Menu.jsx';


const Header = () => {
    return (
    <div className='header'>
        <Logo />
        <Menu />
    </div>
    )
}

export default Header;