import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styled from 'styled-components';


const Icons = styled(FontAwesomeIcon)`
  margin: 10px 15px 10px 15px;
  color: #fff;
`;

const CopyRightText = styled.p`
  color: #000000;
`;

const FooterContainer = styled.div`
  background: #C3D7F7;
  text-align: center;
  padding: 125px 600px 33px;
`
const FooterLinks = styled.div`
  text-align: center;
  padding: 50px 0;
`
const FooterTitle = styled.p`
  color: #fff;
  font-family: Noto Sans;
  font-weight: 800;
  font-size: 30px;
  line-height: 49px;
`
const FooterText = styled.p`
  color: #fff;
  font-family: Noto Sans;
  font-weight: 200;
  font-size: 30px;
  line-height: 49px;
`
const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterTitle>This doesn't have to end yet — Let's Connect!</FooterTitle>
        <FooterText>Email me at n6tam@uwaterloo.ca 💌 <br />Let’s talk about anything.</FooterText>
        <FooterLinks>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id={`tooltip-top`}>Github</Tooltip>}
          >
            <a href="https://devpost.com/software/htg-researchnet/">
              <Icons icon={faGithub} size="lg" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id={`tooltip-top`}>LinkedIn</Tooltip>}
          >
            <a href="https://www.linkedin.com/in/natalie-tam/">
              <Icons icon={faLinkedin} size="lg" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id={`tooltip-top`}>Email</Tooltip>}
          >
            <a href="mailto:n6tam@uwaterloo.ca" target="_blank">
              <Icons icon={faEnvelope} size="lg" />
            </a>
          </OverlayTrigger>
        </FooterLinks>
      </FooterContainer>
    </div>
  )
}

export default Footer