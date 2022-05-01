import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TrackingDetails = () => {
  return (
       <Row>
           <Col md={12} style={{textAlign:'center', marginTop:'40px'}}>
               <h1> Tracking Result</h1>
               <p>
                 For more than a decade we have earned the best on time record and the lowest damage in the
                 industry 
               </p>
               <h3>See Your tracking information Below</h3><hr />
                <h1>A06055104</h1>
                <div>
                    <h3>Airbill No:</h3>
                    <h6>#A06055104.</h6>
                </div>
                <div>
                    <h3>Tracking Status:</h3>
                    <h6>In Transit.</h6>
                </div>
                <div>
                    <h3>Delivery Date:</h3>
                    <h6> 12/06/2022 03:44 PM</h6>
                </div>
                <div>
                    <h3>Delivery Address:</h3>
                    <h6> Kuala Lumpur, Malaysia</h6>
                </div>
                <div>
                    <h3>Signed by:</h3>
                    <h6> Dave Scot, Senior logistics officer</h6>
                </div>

           </Col>
       </Row>
  )
}

export default TrackingDetails