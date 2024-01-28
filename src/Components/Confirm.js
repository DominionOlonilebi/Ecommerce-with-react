import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Confirm = () => {
  return (
    <div>
      <Container fluid>
        <Row>
            <Col md={6} sm={12} >
            <img src='Images/sol7.png' alt='' className='img-fluid'/>
            </Col>

            <Col md={6} sm={12}>
            <h2>6hrs Energy Solar</h2>
            <h5>#45,000</h5>
            <h6>3 months plan <span>Monthly Pay: 250,000</span> </h6>
            <p>Description -</p>
            <p>Versatile Applications: Used for both residential and commercial purposes, incl</p>
            <Button className='confirm_button'><a href='/product'>Continue Shopping</a> </Button>
            <Button className='checkout_button mx-3'><a href='/cart'>Checkout</a> </Button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Confirm
