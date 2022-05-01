import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import bgi from "../images/bgi.jpg";
import bl from "../images/bl.jpg";
import transport from "../images/transport.jpg";
import ware from "../images/ware.jpg";
import express from "../images/express.jpg";



import "./top.css";


const Home = () => {
  return (
     <>
        <Row>
         <Col md={12} style={{ opacity:0.7}}>
            <Card.Img variant="top" src={bgi} className='bimage' style={{marginBottom:'-185px'}} /> 
            <Card.Body>
                    <Card.Title>
                      <h6 style={{fontWeight:'bold', color:'black'}}>
                            The safest way to ship your items.
                        </h6> 
                      </Card.Title>
                    <Card.Text>
                         <h3 style={{fontWeight:'bold', color:'orange'}}>
                            LEADING OVERNIGHT DELIVERY & SHIPPING COMPANY
                           </h3>
                    </Card.Text>
                </Card.Body>
           </Col>
           </Row>
           <Row>
               <Col md={12}  style={{fontWeight:'bold',color:'grey',display:'flex', justifyContent:'center'}}>
                     <h2> SEE WHAT WE PROVIDE YOU</h2>

                </Col>
           </Row>
           <Row>
           <Col md={4} style={{marginTop:'100px'}}>
              <h4>Warehouse Solutions Provider</h4>
              <h6>
                 We help store items  in a safe environment for as long as you want them stored <br />

              </h6>
              <Card.Img variant="top" src={ware} className='bimage'  /> 
           </Col>
           <Col md={4} style={{ marginTop:'100px'}}>
              <h4>Distribution And Transportation</h4>
              <h6>
                   We distribute transport all kinds of items to anywhere in the world

              </h6>
              <Card.Img variant="top" src={transport} className='bimage'  /> 
           </Col>
           <Col md={4} style={{ marginTop:'100px'}}>
              <h4>Express Logistics</h4>
              <h6>
                  There is provision for delivering cargo quicker than the normal time.
              </h6>
              <Card.Img variant="top" src={express} className='bimage'  /> 
           </Col>
        </Row>
     </>
  )
}

export default Home