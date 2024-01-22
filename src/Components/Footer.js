import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Container  fluid className='footers'>
        <Container>
        <Row className='footers_row'>
            <Col md={4} sm={12} className=''>
            <h6>Solarcorp Inc.</h6>
            <p>15 Fubara Dublin Green Street.</p>
            <p>All Rights Reserved &copy; Solarcorp Inc. 2024</p>
            </Col>
<Col md={4} className=''></Col>
            <Col md={4} sm={12} className=' '>
                <h6 >Get In Touch</h6>
                <p >project@Solarcorptech.com</p>
                <p >+2348160445206</p>
            </Col>
        </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Footer
