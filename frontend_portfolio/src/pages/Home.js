import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";
import Header from "./Header";
import Contactus from "./Contactus";
import Projects from "./Projects";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Aboutus from "./Aboutus";



function Home() {
  return (
    <>
    <Header/>
     <Container className="main">
        <Row >
          <Col xs={6} md={4}>
            <Image
              src="/asset/images/Photo.jpeg"
              roundedCircle
              className="image"
            />
          </Col>
          <Col xs={6} md={4} className="data">
            {/* <Image src="holder.js/171x180" roundedCircle /> */}
            <h1>
               Leena Yemul
            </h1>
            <h4>Backend Developer</h4>
          </Col>
        </Row>
      </Container>

      <Aboutus/>

     <Qualification/>

    <Skills/>

    
<Projects/>
<Contactus/>
   <Footer/>
    </>
  );
}

export default Home;




