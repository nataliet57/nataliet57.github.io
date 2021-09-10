import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';
import "./styles.css";
import Slide from 'react-reveal/Slide';
import ResponsiveMenu from "react-responsive-navbar";
import { Close } from "@styled-icons/ionicons-outline/Close";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

import { Container } from "react-bootstrap";

export const LogoButton = styled.div`
  align-items: left;
`
const IntroductionContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin: 150px 500px;
  margin-right: auto;
  margin-left: auto;
`
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  background: #fff;
  padding: 40px 0px;
`

const Title = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 37px;
  padding-bottom: 20px;
`

const Description = styled.div`
  font-family: Helvetica;
  font-style: italic;
  font-weight: 100;
  font-size: 24px;
  line-height: 27px;
  padding-bottom: 20px;
`
const DescriptionText = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.05em;
`

const IntroCard = styled.div`
  padding: 20%;
`
const Introduction = () => {
  return (
    <div id="nav-bar">
      <header className="header">
      <div className="wrap">
        <header className="logo">
          <h1 className="logo-title">
            <LogoButton><img src={logo} alt="Logo" /></LogoButton>
          </h1>
        </header>
        <nav className="menu">
          <ResponsiveMenu
            menuOpenButton={
              <div className="menu hamburger-menu menu-btn">
                <Menu size={32} />
              </div>
            }
            menuCloseButton={
              <div className="menu hamburger-menu menu-btn">
                <Close size={32} />
              </div>
            }
            changeMenuOn="900px"
            menu={
              <ul className="menu-list">
                <li className="menu-item is-active menu-item--play">
                  <a href="#about" className="menu-link">
                  About
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#work" className="menu-link">
                    Work
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#project" className="menu-link">
                  Projects
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#contact" className="menu-link">
                    Contact
                  </a>
                </li>
              </ul>
            }
          />
        </nav>
      </div>
    </header>
    <Container>
        <Slide left>
          <IntroCard>
            <Title>Hey, I’m Natalie 👋 <br /></Title><br />
            <Description>Currently looking for Summer 2022 Internship Opportunities.</Description>
            <DescriptionText>I'm currently a third year student in Management Engineering passionate about creating technological solutions that impact our community. I've worked with front and backend development and I would like to learn more about product management. I enjoy learning new things, listening to music, playing sports, and meeting new people. I'd love to get in touch with you! </DescriptionText>
            <p>。.・゜✭・.・✫・゜・。.・。.・゜✭・.・✫・。.・゜✭・.・✫・゜・。✭</p>
          </IntroCard>
        </Slide>

      </Container>
    </div>
  )
}

export default Introduction;