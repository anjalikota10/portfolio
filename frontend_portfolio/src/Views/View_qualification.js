import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const View_qualification = () => {
  return (
    <>
    <Header/>
    <h1 className="page-heading">Qualifications</h1>
      <Container style={{marginTop:"50px"}}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  B.Tech{" "}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Shree Siddheshwar Women's College of Engineering,Solapur|2021-2024
                </Card.Subtitle>
                <Card.Text> SGPA : 8.10</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  Diploma{" "}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Shri Siddheshwar Women's Polytechnic,Solapur|2018-2021
                </Card.Subtitle>
                <Card.Text>Percentage:85.56</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  SSC{" "}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Valentine Circle English Medium School,Solapur|2021-2024
                </Card.Subtitle>
                <Card.Text>Percentage:60.40</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
      <Footer/>
      </>
  )
}

export default View_qualification