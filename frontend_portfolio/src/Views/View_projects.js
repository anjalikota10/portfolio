import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const View_projects = () => {
  return (
    <>
    <Header/>
     <h1 className="page-heading">Projects</h1>

<Container style={{marginTop:"50px"}}>
  <Row>
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            Printing Press Web Application{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Role:Team Leader
          </Card.Subtitle>
          <Card.Text>
            <li>
          Interactive : Printing Press Web Application: Developed a fully functional Printing Press Web Application using HTML, CSS, and JavaScript,MYSQL and PHP</li>
          <li>Logic implementation: Implemented the website logic to gather client information by adding size, color, and type of printing paper to the customer data list,setting the price by offering both online and offline payment methods, determining the delivery date, and notifying the customer.
            </li></Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            SiddhCamp{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Role:Team Leader
          </Card.Subtitle>
          <Card.Text><li>The system enables students to securely register their information, which is stored in a database for real-time access by administrators, enhancing transparency and efficiency.</li>
          <li>TPOs can input job details, and the system automatically matches eligible students based on criteria like academic performance, ensuring qualified candidates receive notifications.</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            OCR{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
           Role:Team Leader
          </Card.Subtitle>
          <Card.Text><li>Developed a OCR project using android</li><li>If we scan the any document it will convert into text.</li>
          <li>And Text file is saved in phone file manager with current date and time</li>
          <li>File save extension are .doc,.pdf,etc and also we can edit that file.</li></Card.Text>
        </Card.Body>
      </Card>
    </Col>
    
  </Row>
</Container>
<Footer/>
</>
  )
}

export default View_projects;