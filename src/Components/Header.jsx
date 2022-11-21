import React from 'react'
import logo from '../img/logo-pokeAPI.png';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className='header'>
        <img className='header-img' src={logo} alt='logo-pokeApi'/>
        {/* <p className='header-title'>Poke API</p> */}
    </header>
  )
}

export default Header