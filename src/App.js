import React from 'react';
import snowboard from './images/snowboard.png';
import hackathon from './images/hackathon.png';
import sunset from './images/sunset.png';
import doggo from './images/doggo.png';
import { Container, Row } from "react-bootstrap";

import { faBalanceScale, faDatabase, faPalette, faProjectDiagram, faSync, faTerminal, faUsers } from '@fortawesome/free-solid-svg-icons';

import Typical from 'react-typical'
import {
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
  TypingText,
  AboutText,
  AboutPictureContaner,
  AboutPicItems,
  WorkExperienceContainer,
  ToolsContainer,
} from './styles'

import { STRING } from './resources/string';
import InfoCard from './infoCard';
import Projects from './projects';
import Footer from './Footer';
import Introduction from './Introduction';

const App = () => {
  return(
    <div>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Natalie Tam</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="css/style.css"/>

        <Landing>
          <Introduction></Introduction>
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
                'nature lover 🌱',
                1000,
              ]}
            />
          </TypingText>
          <Container>

          </Container>
          <AboutText>{STRING.text.aboutFirst}</AboutText>
          <AboutText>{STRING.text.aboutSecond}</AboutText>
          <AboutPictureContaner>
            <Row>
              <AboutPicItems><img src={snowboard}></img></AboutPicItems>
              <AboutPicItems><img src={hackathon}></img></AboutPicItems>
              <AboutPicItems><img src={sunset}></img></AboutPicItems>
              <AboutPicItems><img src={doggo}></img></AboutPicItems>
            </Row>
          </AboutPictureContaner>
          <AboutText>
            {STRING.text.aboutConcl} <a href="https://natalietam.wixsite.com/photography">here!</a>
          </AboutText>
        </header>


    <header id="work" className="alt">
      <div className="title"><h1> work experience </h1> </div>
      <div className="subtitle"><p> some places i've worked as a software engineer! </p></div>
        <Container>
          <WorkExperienceContainer>
            <b> Killi,</b>
            <i> Full Stack Engineer </i>
            <ul>
              <li>{STRING.work.killi1}</li>
              <li>{STRING.work.killi2}</li>
            </ul>
            <ToolsContainer>
              <Row>
                <InfoCard color="#7189b0" icon={faPython} name="Python / Django" />
                <InfoCard color="#7189b0" icon={faReact} name="React.js" />
                <InfoCard color="#7189b0" icon={faNodeJs} name="Node.js" />
                <InfoCard color="#7189b0" icon={faAws} name="Amazon Web Services" size="sm" />
                <InfoCard color="#7189b0" icon={faPalette} name="Product Design" />
                <InfoCard color="#7189b0" icon={faSync} name="Agile" />
                <InfoCard color="#7189b0" icon={faApple} name="iOS" />
              </Row>
            </ToolsContainer>
          </WorkExperienceContainer>
        </Container>
        <Container>
          <WorkExperienceContainer>
            <b> UW Print &amp; Retail Services,</b> <i> Informations Systems Analyst </i>
            <ul>
              <li>{STRING.work.uwprs1}</li>
              <li>{STRING.work.uwprs2}</li>
              <li>{STRING.work.uwprs3}</li>
              <li>{STRING.work.uwprs4}</li>
            </ul>
            <ToolsContainer>
              <Row>
                <InfoCard color="#7189b0" icon={faMagento} name="Magento" />
                <InfoCard color="#7189b0" icon={faDatabase} name="PostgreSQL" />
                <InfoCard color="#7189b0" icon={faTerminal} name="Bash" />
                <InfoCard color="#7189b0" icon={faUsers} name="Teamwork" />
                <InfoCard color="#7189b0" icon={faBalanceScale} name="Optimization" />
              </Row>
            </ToolsContainer>
          </WorkExperienceContainer>
        </Container>
        <Container>
          <WorkExperienceContainer>
            <b>Formula Electric,</b> <i> Operations Sublead </i>
            <ul>
              <li>{STRING.work.fe1}</li>
              <li>{STRING.work.fe2}</li>
            </ul>
            <Row>
              <ToolsContainer>
                <InfoCard color="#7189b0" icon={faJira} name="Jira" />
                <InfoCard color="#7189b0" icon={faProjectDiagram} name="Project Management" />
                <InfoCard color="#7189b0" icon={faUsers} name="Teamwork" />
              </ToolsContainer>
            </Row>
          </WorkExperienceContainer>
        </Container>
    </header>
    <header id="project" className="alt">
      <Projects></Projects>
    </header>
    <header id="contact" className="alt">
      <Footer></Footer>
    </header>
    </div>
  );



};

export default App;
