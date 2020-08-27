import React from 'react';
import logo from '../images/logo.png'


const Header = () => {
  return(
    <header className='center'>
        <img src={logo} alt='Tic Tac Toe' className='logo'/>
        <h1 className='niceFont'>TIC TAC TOE</h1>
    </header>
  );
}

export default Header;
