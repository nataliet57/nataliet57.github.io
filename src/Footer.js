import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styled from 'styled-components';
import researchNet from './images/researchnet.png';


const Icons = styled(FontAwesomeIcon)`
  margin: 10px 15px 10px 15px;
  color: #f2fdff;
`;

const CopyRightText = styled.p`
  color: #f2fdff;
`;

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
);
const Footer = () => {
  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <a href="https://devpost.com/software/htg-researchnet/">
          <img src={researchNet} />
        </a>
      </OverlayTrigger>
    </div>
  )
}

export default Footer