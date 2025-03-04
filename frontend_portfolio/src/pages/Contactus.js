import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Contactus = () => {

const [fname,setfname]=useState("");
const [lname,setlname]=useState("");
const [email,setemail]=useState("");
const [msg,setmsg]=useState("");
const [fetch,setfetch]=useState([]);
function handleClick(){
    const data={
        fname:fname,
        lname:lname,
        email:email,
        msg:msg
    }
    console.log(data)

  axios.post("http://127.0.0.1:8000/api/contact",data)
  .then(res=>{
    alert('Contacted');
    window.location('contactus');

  }).catch(err=>{
    console.log(err);
  })
}


//  const getdata=()=>{ 
//         axios.get("http://127.0.0.1:8000/api/contact")
//         .then(res=>{
//           setfetch(res.data)
//         }).catch(err=>{
//           console.log(err);
//         })
//  }
//  useEffect(()=>{
//     getdata();
//  },[])

  return (
    <>
  
      <h1 className="page-heading">Contact Me</h1>
      <Form>
        <Container className="custom-container">
      <Row>
       <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter First Name</Form.Label>
        <Form.Control type="text" name="fname" onChange={(e)=>setfname(e.target.value)}   />
      </Form.Group></Col>

      <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Last Name</Form.Label>
        <Form.Control type="text" name="lname" onChange={(e)=>setlname(e.target.value)} />
      </Form.Group></Col>

      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" onChange={(e)=>setemail(e.target.value)}  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea"  rows={3}  name="msg" onChange={(e)=>setmsg(e.target.value)} />
      </Form.Group>

      <Button variant="outline-primary btn"  onClick={()=>handleClick()}>Send Message</Button>
      </Container>
    </Form>
  
   
    </>
  )
}

export default Contactus