import React from 'react';
import logo from './images/logo.png';
import profile from './images/profile.jpg';
import snowboard from './images/snowboard.png';
import hackathon from './images/hackathon.png';
import sunset from './images/sunset.png';
import doggo from './images/doggo.png';
import resume from './natalie-tam-resume.pdf'

import { faBalanceScale, faDatabase, faPalette, faProjectDiagram, faSync, faTerminal, faUsers } from '@fortawesome/free-solid-svg-icons';

import Typical from 'react-typical'
import {
  faLinux,
  faApple,
  faReact,
  faNodeJs,
  faPython,
  faAws,
  faMagento,
  faJira,
} from "@fortawesome/free-brands-svg-icons";

import './App.css';

import {
  Landing,
  NavContainer,
  NavItems,
  IntroCard,
  IntroCardBackground,
  TitleDescription,
  Navbar,
  LogoButton,
  TypingText,
  AboutText,
  AboutPictureContaner,
  AboutPicItems,
  WorkExperienceContainer,
  WorkContainer,
  ToolsContainer,
} from './styles'

import { STRING } from './resources/string';
import InfoCard from './infoCard';
import Projects from './projects';

const App = () => {
  return(
    <div>
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Natalie Tam</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="css/style.css"/>
      <Landing>
        <NavContainer>
          <Navbar>
            <LogoButton><img src={logo} alt="Logo" /></LogoButton>
              <NavItems><a href="#about">about</a></NavItems>
              <NavItems><a href="#work">work</a></NavItems>
              <NavItems><a href="#project">projects</a></NavItems>
              <NavItems><a href="#contact">contact</a></NavItems>
          </Navbar>
        </NavContainer>
        <IntroCardBackground>
        </IntroCardBackground>
        <IntroCard>
          <header id="home" className="alt">
            <div className="title">
              <h1>
                <b>Hey, I'm Natalie </b>
                <span>👋</span>
              </h1>
            </div>
            <div className="header2">
              <TitleDescription> Management Engineering Student at The University of Waterloo </TitleDescription>
              <p>{STRING.text.intro}</p>
              <a href={resume} button type="button" className="btn btn-primary">View my Resume</a>
            </div>
            <div className="profile-pic"> <img src={profile} alt="Profile Picture" /> </div>
          </header>
        </IntroCard>
      </Landing>
      <header id="about">
        <TypingText>I'm a {' '}
          <Typical
            loop={Infinity}
            wrapper='p'
            steps={[
              'designer 💅🏻',
              1000,
              'guitarist 🎸',
              1000,
            ]}
          />
        </TypingText>
        <AboutText>{STRING.text.aboutFirst}</AboutText>
        <AboutText>{STRING.text.aboutSecond}</AboutText>
        <AboutPictureContaner>
          <AboutPicItems><img src={snowboard}></img></AboutPicItems>
          <AboutPicItems><img src={hackathon}></img></AboutPicItems>
          <AboutPicItems><img src={sunset}></img></AboutPicItems>
          <AboutPicItems><img src={doggo}></img></AboutPicItems>
        </AboutPictureContaner>
        <AboutText>{STRING.text.aboutConcl} <a href="https://natalietam.wixsite.com/photography">here!</a></AboutText>
      </header>
      <header id="work" className="alt">
        <div className="title"><h1> work experience </h1> </div>
        <div className="subtitle"><p> Seeking Fall 2021 Internships</p></div>
        <div className ="center">
          <WorkContainer>
            <WorkExperienceContainer>
              <b> Killi,</b>
              <i> Full Stack Engineer </i>
              <ul>
                <li>{STRING.work.killi1}</li>
                <li>{STRING.work.killi2}</li>
              </ul>
              <ToolsContainer>
                <InfoCard color="#7189b0" icon={faPython} name="Python / Django" />
                <InfoCard color="#7189b0" icon={faReact} name="React.js" />
                <InfoCard color="#7189b0" icon={faNodeJs} name="Node.js" />
                <InfoCard color="#7189b0" icon={faAws} name="Amazon Web Services" />
                <InfoCard color="#7189b0" icon={faPalette} name="Product Design" />
                <InfoCard color="#7189b0" icon={faSync} name="Agile" />
                <InfoCard color="#7189b0" icon={faApple} name="iOS" />
              </ToolsContainer>
            </WorkExperienceContainer>
            <WorkExperienceContainer>
              <b> UW Print &amp; Retail Services,</b> <i> Informations Systems Analyst </i>
              <ul>
                <li>{STRING.work.uwprs1}</li>
                <li>{STRING.work.uwprs2}</li>
                <li>{STRING.work.uwprs3}</li>
                <li>{STRING.work.uwprs4}</li>
              </ul>
              <ToolsContainer>
                <InfoCard color="#7189b0" icon={faMagento} name="Magento" />
                <InfoCard color="#7189b0" icon={faDatabase} name="PostgreSQL" />
                <InfoCard color="#7189b0" icon={faTerminal} name="Bash" />
                <InfoCard color="#7189b0" icon={faUsers} name="Teamwork" />
                <InfoCard color="#7189b0" icon={faBalanceScale} name="Optimization" />
              </ToolsContainer>
            </WorkExperienceContainer>
            <WorkExperienceContainer>
              <b>Formula Electric,</b> <i> Operations Sublead </i>
              <ul>
                <li>{STRING.work.fe1}</li>
                <li>{STRING.work.fe2}</li>
              </ul>
              <ToolsContainer>
                <InfoCard color="#7189b0" icon={faJira} name="Jira" />
                <InfoCard color="#7189b0" icon={faProjectDiagram} name="Project Management" />
                <InfoCard color="#7189b0" icon={faUsers} name="Teamwork" />
              </ToolsContainer>
            </WorkExperienceContainer>
          </WorkContainer>
        </div>
      </header>
        <header id="project" className="alt">
          <Projects></Projects>
        </header>
    </div>
  );



};

export default App;