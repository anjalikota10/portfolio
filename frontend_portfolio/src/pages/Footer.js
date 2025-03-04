import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <Container className="footer">
      <Row>
      <Col>©All Rights Reserved</Col>
      <Col style={{marginLeft:"400px"}}>Designed and Developed by:Leena Yemul</Col>
      </Row>
    </Container>
    </>
  )
}

export default Footer;