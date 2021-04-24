import React from 'react';
import logo from './images/logo.png';
import { LogoButton, Navbar, NavContainer, NavItems } from './styles';

const Introduction = () => {
  return (
    <div>
      <NavContainer>
          <Navbar>
            <LogoButton><img src={logo} alt="Logo" /></LogoButton>
              <NavItems><a href="#about">about</a></NavItems>
              <NavItems><a href="#work">work</a></NavItems>
              <NavItems><a href="#project">projects</a></NavItems>
              <NavItems><a href="#contact">contact</a></NavItems>
          </Navbar>
        </NavContainer>
    </div>
  )
}

export default Introduction;