import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';

const NavContainer = styled.div`
  display: flex;
  margin: 70px 250px;
`
const NavLinksContainer = styled.div`
  display: flex;
  transform: translateY(25%);
  align-items: right;
`
const NavItems = styled.div`
  margin-right: 20px;
`
export const LogoButton = styled.div`
  align-items: left;
`

const Introduction = () => {
  return (
    <div>
      <NavContainer>
        <LogoButton><img src={logo} alt="Logo" /></LogoButton>
        <NavLinksContainer>
          <NavItems><a href="#about">about</a></NavItems>
          <NavItems><a href="#work">work</a></NavItems>
          <NavItems><a href="#project">projects</a></NavItems>
          <NavItems><a href="#contact">contact</a></NavItems>
        </NavLinksContainer>
      </NavContainer>
    </div>
  )
}

export default Introduction;