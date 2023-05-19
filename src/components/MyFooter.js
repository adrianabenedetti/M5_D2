import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { colOne, colTwo, colThree } from "../data/footerLinks";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ul>
            {colOne.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.title}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col>
          <ul>
            {colTwo.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.title}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col>
          <ul>
            {colThree.map((item) => {
              return <li key={item.title}>{item.title}</li>;
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
