import React from 'react'
import { Row, Col } from 'react-bootstrap';
import logo from "../images/lso.jpeg";


const Footer = () => {
  return (
      <Row style={{marginTop:'50px'}} >
          <Col md={4}className='bg-dark text-light' >
               <p>Customer Service </p>
               <p>Help center</p> 
               <p>
                  <i className="fa-solid fa-phone text-primary"></i>
                      +13526760440
                 </p>
                 <p>
                 <i className="fa-solid fa-location-dot text-primary"></i>
                  Office Address: 1708 West 5th Street, Suite 625, Austin, Texas, 78708
                </p>
          </Col>
          <Col md={4} className='bg-dark text-light'  >
             <img  src={logo} style={{ width:'100px', marginTop:'20px',marginLeft:'50px'}}/>
             <p>The leader in logistics business</p>
             <p>copyright 2022 all rights reserved</p>
          </Col>
          <Col md={4} className='bg-dark text-light'  >
               <p> Our Social Media</p>
               <div style={{cursor:'pointer'}}>
                 <i className="fa-brands fa-facebook text-primary"></i>
                 <i className="fa-brands fa-instagram text-danger"></i>
                 <i className="fa-brands fa-youtube text-danger"></i>
                 <i className="fa-brands fa-linkedin-in text-primary"></i>
               </div>
          </Col>
      </Row>
  )
}

export default Footer