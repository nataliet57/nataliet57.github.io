import React from 'react';
import { faJava, faJsSquare, faPhp, faPython, faRaspberryPi, faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faPaintBrush, faProjectDiagram, faUsers } from '@fortawesome/free-solid-svg-icons';
import googleLaptop from './images/laptop-image.png';
import woodenMirror from './images/wooden-mirror.png';
import researchNet from './images/researchnet.png';
import { Container, Row, Image } from "react-bootstrap";
import "./styles.css";


import InfoCard from './infoCard';
import {
  ProjectContainer,
  ProjectText,
  ProjectsIntro,
  ProjectTitle,
  ProjectSubtitle,
  ProjectDescription,
  ToolsContainer,
  ProjectImage,
  ProjectImageContainer
} from './styles';
import { STRING } from './resources/string';


const Projects = () => {
  return (
    <div>
      <ProjectsIntro>On my free time... </ProjectsIntro>
      <Container>
        <Row className="custom-row">
          <ProjectContainer>
            <ProjectText>
              <ProjectTitle>google clone search engine</ProjectTitle>
              <ProjectSubtitle>PERSONAL SIDE PROJECT: WEB APP DESIGN</ProjectSubtitle>
              <ProjectDescription>Designed and built my own search engine service like Google</ProjectDescription>
              <ToolsContainer>
                <InfoCard color="#C3D7F7" icon={faJsSquare} name="Javascript" />
                <InfoCard color="#C3D7F7" icon={faDatabase} name="MySQL" />
                <InfoCard color="#C3D7F7" icon={faPhp} name="PHP" />
              </ToolsContainer>
            </ProjectText>
          </ProjectContainer>
          <ProjectImage>
            <Image img src={googleLaptop} />
          </ProjectImage>
        </Row>
      </Container>

      <Container>
        <Row className="custom-row">
          <ProjectContainer>
            <ProjectText>
              <ProjectTitle>smart mirror</ProjectTitle>
                <ProjectSubtitle>PERSONAL SIDE PROJECT: HARDWARE DESIGN</ProjectSubtitle>
                <ProjectDescription>Built a smart mirror powered by a Raspberry Pi! I got to do some interesting wood working and painting</ProjectDescription>
                <ToolsContainer>
                    <InfoCard color="#C3D7F7" icon={faJsSquare} name="Javascript" />
                    <InfoCard color="#C3D7F7" icon={faRaspberryPi} name="Raspberry Pi" />
                    <InfoCard color="#C3D7F7" icon={faJava} name="Java" />
                    <InfoCard color="#C3D7F7" icon={faPaintBrush} name="Design" />
                </ToolsContainer>
            </ProjectText>
          </ProjectContainer>
          <ProjectImage>
            <Image img src={woodenMirror} />
          </ProjectImage>
        </Row>
      </Container>

      <Container>
        <Row className="custom-row">
          <ProjectContainer>
          <ProjectText>
              <ProjectTitle>ResearchNet</ProjectTitle>
              <ProjectSubtitle>HACKATHON PROJECT</ProjectSubtitle>
              <ProjectDescription>{STRING.projects.researchNet}</ProjectDescription>
              <ToolsContainer>
                <InfoCard color="#C3D7F7" icon={faPython} name="Python" />
                <InfoCard color="#C3D7F7" icon={faProjectDiagram} name="Plotly" />
                <InfoCard color="#C3D7F7" icon={faJsSquare} name="Javascript" />
                <InfoCard color="#C3D7F7" icon={faUsers} name="Teamwork" />
              </ToolsContainer>
            </ProjectText>
          </ProjectContainer>
          <ProjectImage>
          <div>
                <a href="https://devpost.com/software/htg-researchnet/">
                  <img src={researchNet} />
                </a>
              </div>
          </ProjectImage>
        </Row>
      </Container>
    </div>
  )
}
export default Projects