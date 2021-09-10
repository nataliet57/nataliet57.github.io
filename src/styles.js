import styled from 'styled-components'
import "typeface-roboto";
import './index.css';

import { BREAKPOINTS } from './resources/constants';


export const Landing = styled.div`
  display: grid;
  background: #fff;
`
export const Wrapper = styled.div`
  padding-top: 10%;
`;

export const IntroTitle = styled.p`
  font-family: Inconsolata;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
`
export const IntroContainer = styled.div`
  width: 600px;
`
export const NavContainer = styled.div`
  padding: 70px 0px 40px;
`
export const Navbar = styled.div`
  display: inline-flex;
  flex-direction: row;
`
export const TitleDescription = styled.div`
  font-style: italic;
  font-size: 24px;
  line-height: 30px;
  align-items: flex-end;
  padding-bottom: 10px;
`
export const LogoButton = styled.div`
  align-items: left;
  margin-right: 900px;
`
export const NavItems = styled.div`
  margin-right: 20px;
`
export const AboutText = styled.div`
  font-family: Helvetica;
  font-size: 18px;
  line-height: 21px;
  font-weight: 300;
  line-height: 21px;
  padding-bottom: 30px;
`
export const TypingText = styled.div`
  font-family: Courier New;
  font-size: 30px;
  font-weight: bold;
`
export const AboutPicItems = styled.div`
  padding: 40px;
`
export const AboutPictureContaner = styled.div`
  display: flex;
  justify-content: center;
`
export const WorkContainer = styled.div`
  align-items: center;
  padding: 0 300px;
`
export const Icon = styled.img`
  width: 100px;
  height: relative;
  &:hover {
    filter: none;
  }
`;
export const WorkExperienceContainer = styled.div`
  border-radius: 15px;
  box-shadow: 5px 10px 20px #d4d4d4;
  border: 1px solid #7189b0;
  padding: 30px;
  align-items: center;
  margin-bottom: 50px;
  background: white;
  &:hover {
    transform: scale(1.01);
  }
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export const ToolsContainer = styled.div`
  display: flex;
`

export const ProjectsIntro = styled.div`
  text-align: center;
  padding: 75px 0;
  font-style: italic;
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
`

export const ProjectContainer = styled.div`
  margin: 10px;

`
export const ProjectText = styled.div`
  width: 425px;
`
export const ProjectTitle = styled.p`
  font-size: 24px;
  font-family: 'Roboto Mono';
`
export const ProjectSubtitle = styled.p`
  font-size: 18px;
  font-family: 'Ubuntu Mono';
  color: #1D4688;
`
export const ProjectDescription = styled.p`
  font-size: 18px;
`
export const ProjectImage = styled.div`

`
export const ProjectImageContainer = styled.div`
`
