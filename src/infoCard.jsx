
import React from "react";
import styled from "styled-components";
import { Card, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tools = styled.div`
  border-radius: 15px;
  padding: 0px 10px 0px 10px;
  margin: 5px 0px 5px 10px;
  background-color: ${(props) => props.color};
  margin-right: 25px;
`;

const Icons = styled(FontAwesomeIcon)`
  color: white;
  display: inline-block;
  margin: 0px 5px 0px 5px;
`;

const ToolsText = styled.p`
  color: white;
  display: inline-block;
  height: 50%;
  margin: 0px 3px 4px 5px;
  font-size: 12px;
`;


export default class InfoCard extends React.Component {
  render() {
    const { color, icon, name } = this.props
    return (
      <div>
          <Row>
            <Tools color={color}>
              <Icons icon={icon} size="sm" />
              <ToolsText>{name}</ToolsText>
            </Tools>
          </Row>
      </div>
    );
  }
}