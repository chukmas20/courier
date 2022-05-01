import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ship from "../images/ship.jpg";

const AboutUs = () => {
  return (
      <>
      <Row>
          <Col md={12}>
               <div style={{justifyContent:'center', alignItems:'center', marginLeft:'20%'}}>
                 <h1 style={{marginLeft:'7%'}}> WHO WE ARE </h1>
                 <h6> We are the leading logistics company operating in the united states of America</h6>
               </div> 
          </Col>
      </Row>
      <Row>
          <Col md={12}>
          <Card.Img variant="top" src={ship} className='bimage' style={{marginTop:'10px'}} /> 
          </Col>
      </Row>
      <Row>
          <Col md={6}  >
              <h1 style={{color:'blue', fontWeight:'bold'}}> Mission Statement</h1>
              <p>We were established to offer unique custom clearance (sea & air freight) 
                  and express logistics delivery services to our valued clients in new and innovative ways that would mark clear departure from existing methods.
                    Our vision is to enhance customer satisfaction
                 by re-inventing schedule integrity and fidelity to the air express industry through our use of efficient and modern technology and the skills of highly trained personnel. In the same spirit our mission goes with equitable returns for investors and job satisfaction for our personnel.
                </p>
          </Col>
          <Col md={6}  >
              <h1 style={{color:'blue', fontWeight:'bold'}}> The Board, Management and Personnel</h1>
             <p>
             Our human assets include a most dedicated and highly experienced board of directors who make invaluable inputs and design our unique policies.
              We have also a very efficient management team with rare skills to reckon with in the industry and a staff strength of over 350 personnel nationwide.
              Our Sale and marketing teams are among the most customer friendly in the logistics and freight services and have proven to be the human-face to the ideal customer care service.
            </p>
          </Col>
      </Row>
      </>
  )
}

export default AboutUs