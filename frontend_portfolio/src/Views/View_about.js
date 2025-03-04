import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const View_aboutus = () => {
  return (
    <>
   <Header/>
    <h1 className="page-heading">About us</h1>
      <Container className="aboutus">
        <Row>
          <Col>
            <img src="asset/images/about.jpg" />
          </Col>
          <Col className="aboutcontent">
            <h3 class="mb-4">Back End Developer</h3>
            <p>
              Back-end development means working on server-side software, which
              focuses on everything you can't see on a website. Back-end
              developers ensure the website performs correctly, focusing on
              databases, back-end logic, application programming interface
              (APIs), architecture, and servers.
            </p>
            <Row>
              <Col>
                <h6>
                  Name: <span class="text-secondary">Leena Yemul</span>
                </h6>
              </Col>
              <Col>
                <h6>
                  DOB: <span class="text-secondary">9 Octomber 2002</span>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>
                  Degree: <span class="text-secondary">B.Tech In IT</span>
                </h6>
              </Col>
              <Col>
                <h6>
                  Address:{" "}
                  <span class="text-secondary">Solapur, Maharashtra</span>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>
                  Working Status: <span class="text-secondary">Available</span>
                </h6>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer/>
   
      </>
  )
}

export default View_aboutus