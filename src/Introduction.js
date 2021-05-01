import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';
import Particles from 'react-particles-js';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const NavLinksContainer = styled.div`
  display: flex;
  transform: translateY(25%);
`
const NavItems = styled.div`
  margin-right: 20px;
`
export const LogoButton = styled.div`
  align-items: left;
`
const IntroductionContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin: 150px 500px;

`
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 40px 250px 40px;
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
  padding: 100px 0;
`
const Introduction = () => {
  return (
    <div id="nav-bar">
      <Navbar>
        <LogoButton><img src={logo} alt="Logo" /></LogoButton>
        <NavContainer>
            <NavLinksContainer>
              <NavItems><a href="#about">About</a></NavItems>
              <NavItems><a href="#work">Work</a></NavItems>
              <NavItems><a href="#project">Projects</a></NavItems>
              <NavItems><a href="#contact">Contact</a></NavItems>
            </NavLinksContainer>
          </NavContainer>
      </Navbar>
      <IntroductionContainer>
        <IntroCard>
          <Title>Hey, I’m Natalie 👋 <br /></Title><br />
          <Description>Currently looking for a Fall 2021 Internship.</Description>
          <DescriptionText>I'm currently a second year student in Management Engineering passionate about planning, developing, and delivering software solutions. I enjoy learning new things, music, playing sports, and meeting new people. I'd love to get in touch with you! </DescriptionText>
          <p>。.・゜✭・.・✫・゜・。.・。.・゜✭・.・✫・。.・゜✭・.・✫・゜・。✭</p>
        </IntroCard>
      </IntroductionContainer>
      <Particles
        params={{
          particles: {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#7189b0"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#f0f0f0",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
        }}
      >
      </Particles>
    </div>
  )
}

export default Introduction;