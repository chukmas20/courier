import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import cont from "../images/cont.jpg";
import { useNavigate } from 'react-router';



const Tracking = () => {
 const navigate = useNavigate();
 const [userInput, setUserInput] = useState("")
  const handleClick =()=>{
      if(userInput === ""){
         alert("Please enter a value")
      }
      if(userInput === "A06055104" || userInput === "a06055104"){
          navigate("/trackingDetails")
      }else{
          alert("Your tracking number is incorrect")
          setUserInput("")

      }
  }
  return (
      <>
     <Row>
         <Col md={5} >
             <div style={{
                 marginTop:'50px',
                  alignItem:'center',
                   justifyContent:'center',
                   marginLeft:'40px',
                   borderRight:'1px solid black '
                }}
               >
                <div> 
                    <input 
                      type='text'
                      placeholder='tracking number...'
                       required
                       value={userInput}
                      onChange={(e)=>setUserInput(e.target.value)}
                      /> 
                </div> 
                 <button onClick={handleClick}className='btn bg-dark text-white mt-3' style={{marginLeft:'20px'}}>
                      Track My Parcel
                 </button> 
             </div>    
         </Col>
         <Col md={7}>
              <h1 style={{color:'grey', fontWeight:'100'}}> By Entering your tracking number you can view details of your parcel</h1>
         </Col>
     </Row>
     <Row>
         <Col md={12} style={{marginTop:'100px'}}>
             <Card.Img variant="top" src={cont} className='bimage'  /> 
             {console.log(userInput)}
         </Col>
     </Row>
  </>

  )
}

export default Tracking