import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./top.css";


const Top = () => {
  return (
    <Container fluid  className='bg-dark text-light'>
              <Row>
                  <Col md={4}   style={{display:'flex', padding:'10px'}}>
                     <h6 className='sub-title'>SHIP WITH LSO NOW</h6>
                  </Col>
                  <Col md={4}>
                    <ul style={{display:'flex',  listStyle:'none'}}>
                           <li >Alerts</li>
                           <li>Sales</li>
                           <li>Customer service</li>
                           <i className="fa-solid fa-location-dot" ></i>
                           <li>Location</li>
                       </ul>
                  </Col>
              </Row>
    </Container>
  )
}

export default Top

