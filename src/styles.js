import styled from 'styled-components'

export const Landing = styled.div`
  display: grid;
  padding: 0px 300px 170px;
  background: #FBF2E7;
`
export const IntroCardBackground = styled.div`
  // background: #5A90E7;
  // width: 840px;
  // height: 500px;
  // padding: 0px 75px;
  // position: absolute;
`
export const IntroCard = styled.div`
  padding: 0px 75px;
  position: relative;
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
  width: 1000px;
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
  display: flex;
`
export const ProjectText = styled.div`
  height: 100%
`
export const ProjectTitle = styled.p`
  font-size: 24px;
`