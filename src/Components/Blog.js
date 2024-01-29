import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SolarNav from './SolarNav'
import Footer from './Footer'

const Blog = () => {
  return (
    <div>
      <SolarNav/>
      <Container fluid className='blogs'>
        <Container>
      <h1>404</h1>
      <h4>Page Not Found</h4>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Row className='d-flex flex-row justify-content-center'>
<Col md={3}>
          <Button className='blogs_button '><a href='/'>Go Back Home</a> </Button>
          </Col>
</Row>
</Container>
</Container>
<Footer/>
    </div>
  )
}

export default Blog
