import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Accordion, Card, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'

const Testimonial = () => {
  return (
    <section className='py-5'>
        <Container className="py-5 testimony">
        <h1 className='mb-3'>Testimonial</h1>
        <Row className='d-flex flex-row justify-content-center'> 
            <Col md={7}>
              <Carousel slide>
                <Carousel.Item>
            <Card className='card-fluid py-4'>
                <h6 className='mx-3'><strong>Get Access To Affordable Energy</strong></h6>
      <Card.Body>We provide the option of payment by installment for our Solar products and services leaving our customers to enjoy more electricity at a cheaper price Whether you are a remote worker, freelancer, Sme or a large corporate business you have access to this opportunity.
      </Card.Body>
      <div className='mx-3'>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStarHalf} width={16} height={16} className='testimony_star'/>
      </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
            <Card className='card-fluid py-4'>
                <h6 className='mx-3'><strong>Backup You Can Trust</strong></h6>
      <Card.Body>Worried about unexpected outages? Solarcorp comes with a reliable battery backup system that ensures you have uninterrupted power even when the sun takes a brea..</Card.Body>
      <div className='mx-3'>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStarHalf} width={16} height={16} className='testimony_star'/>
      </div>
    </Card>
    </Carousel.Item>
    <Carousel.Item>
            <Card className='card-fluid py-4'>
                <h6 className='mx-3'><strong>Seamless Transition</strong></h6>
      <Card.Body>We realize your energy need increase over time. We've got you covered. You can upgrade the hours of solar power you require Whether it's 6hrs, 8hrs, 12hrs or 24hrs you pay for the hours you require to be productive and live a comfortable lifestyle with our solar products.</Card.Body>
      <div className='mx-3'>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='testimony_star'/>
      <FontAwesomeIcon icon={faStarHalf} width={16} height={16} className='testimony_star'/>
      </div>
    </Card>
    </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
      </Container>

      <Container className='question_container'>
        <Row>
          <h6>Common Questions</h6>
          <h1>Frequently Asked Questions</h1>
          <Col>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What Is Solarcorp?</Accordion.Header>
        <Accordion.Body>
        Solarcorp is a solar company transforming Families and Businesses with access to affordable and reliable Solar Energy Solution
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Where is the company located?</Accordion.Header>
        <Accordion.Body>
          LWe are located at 15 fubara Dublin green street lekki
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are the terms and conditions of pay small small plan?
</Accordion.Header>
        <Accordion.Body>
        You’ll make an initial deposit, then send your bank statement to show eligibility of making payment. After which your solar system will be installed
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How long will it take for my solar system to be installed after initial deposit ?
</Accordion.Header>
        <Accordion.Body>
        72 hours after payment is verified
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Does solarcorp products have warranty ?
</Accordion.Header>
        <Accordion.Body>
        All solarcorp products have warranty of 5 years
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>How does solarcorp help you save cost?
</Accordion.Header>
        <Accordion.Body>
        In comparison to the cost of buying fuel/ diesel for your generator. Solarcorp has come up with a package that has you save cost while enjoying uninterrupted electricity.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </Col>
        </Row>
        <div className='embed_video'>
        <iframe width="1074" height="589" src="https://www.youtube.com/embed/0q3e2G_Or_s" title="How to Make Portable Solar Inverter - Free Energy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
      </Container>

    </section>
  )
}

export default Testimonial
