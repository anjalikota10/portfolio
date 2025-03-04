import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from "react-bootstrap/Container";
import Footer from '../pages/Footer';
import Header from '../pages/Header';

const View_skills = () => {
  return (
   <>
   <Header/>
   <h1 className="page-heading">Skills</h1>

<Container>
  <Row>
   <Col><h4>HTML</h4><br/><ProgressBar now={90} label="90%" /></Col> 
   <Col><h4>CSS</h4><br/><ProgressBar now={70} label="70%" /></Col> 
  </Row>
  <Row>
   <Col><h4>JS</h4><br/><ProgressBar now={60} label="60%" /></Col> 
   <Col><h4>PHP</h4><br/><ProgressBar now={90} label="90%" /></Col> 
  </Row>
  <Row>
   <Col><h4>JAVA</h4><br/><ProgressBar now={70} label="70%" /></Col> 
   <Col><h4>React</h4><br/><ProgressBar now={20} label="20%" /></Col> 
  </Row>

</Container>
<Footer/>
   </>
  )
}

export default View_skills;