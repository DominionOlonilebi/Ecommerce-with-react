import { cibSlides, cilBoltCircle, cilCheck, cilZoomOut } from '@coreui/icons'
import CIcon from '@coreui/icons-react';
import { faCheck, faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardHeader, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Cardss = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Container className='cards_container'>
        <h3>Buy Now, <span>Pay Later</span></h3>
          <Row>
            <Col md={6} className='mb-5'>
            <div className={`slide-down-container ${isVisible ? "visible" : ""}`}>
            <p className="slide-down-text">
            <Card className='card-fluid my-4'>
                <h5 className='mx-3 pt-3'><strong>Get Access To Affordable Energy</strong></h5>
      <Card.Body className='card_text'>We provide the option of payment by installment for our Solar products and services leaving our customers to enjoy more electricity at a cheaper price Whether you are a remote worker, freelancer, Sme or a large corporate business you have access to this opportunity.</Card.Body>
    </Card>
    
            <Card className='card-fluid my-4'>
                <h5 className='mx-3 pt-3'><strong>Backup You Can Trust</strong></h5>
      <Card.Body className='card_text'>Worried about unexpected outages? Solarcorp comes with a reliable battery backup system that ensures you have uninterrupted power even when the sun takes a brea..</Card.Body>
    </Card>
    
            <Card className='card-fluid my-4'>
                <h5 className='mx-3 pt-3'><strong>Seamless Transition</strong></h5>
      <Card.Body className='card_text'>We realize your energy need increase over time. We've got you covered. You can upgrade the hours of solar power you require Whether it's 6hrs, 8hrs, 12hrs or 24hrs you pay for the hours you require to be productive and live a comfortable lifestyle with our solar products.</Card.Body>
    </Card>  
            </p>
          </div>
            </Col>

            <Col md={6}>
            <img src='Images/sol8.png' alt='' className='img-fluid'/>
            </Col>
        </Row>
      </Container>


      <Container className='card_container'>
        <h1>Our Solution</h1>
        <Row>
          <Col md={4}>
          <Card className='card-fluid my-3 mx-4'>
            <img src='Images/ssol1.png' alt='' width={40} height={40} className='img-fluid mt-4 mb-2'/> 
                <h5><strong>Home or residential solution</strong></h5>
      <Card.Body className='cards_text'>We have provided power solution recommended for home or residence with 1 bedroom, 2-3 bedroom, duplex or mansion.</Card.Body>
      <a href='/cart'>Learn More</a>
    </Card>
          </Col>
          <Col md={4}>
          <Card className='card-fluid my-3 mx-4'>
          <img src='Images/ssol2.png' alt='' width={40} height={40} className='img-fluid mt-4 mb-2'/>
                <h5><strong>SMEs and Business solution</strong></h5>
      <Card.Body className='cardss_text'>We have provided power solution recommended for small, medium or large business.</Card.Body>
      <a href='/cart'>Learn More</a>
    </Card>
          </Col>
          <Col md={4}>
          <Card className='card-fluid my-3 mx-4'>
          <img src='Images/ssol3.png' alt='' width={40} height={40} className='img-fluid mt-4 mb-2'/>
                <h5><strong>Schools solution</strong></h5>
      <Card.Body className='cardssx_text'>We have provided power solution recommended for schools with different amount of classroms and sections.</Card.Body>
      <a href='/cart'>Learn More</a>
    </Card>
          </Col>
        </Row>
        <Row className='d-flex flex-row justify-content-center'>
<Col md={3}>
          <Button className='plan_button '><Link to='/product' className='shopping_btn'>Start Shopping</Link> </Button>
          </Col>
</Row>
      </Container>

      <Container fluid className='plan_section'>
        <Container>
<Row className='plan_row'>
            <Col md={6}>
              <img src='Images/sol6.png' alt=''className='img-fluid'/>
            </Col>
            <Col md={6} className='px-5'>
              <h2>How To Get Started</h2>
              <h3><FontAwesomeIcon icon={faCheck} width={12} height={12} className='check'/> &nbsp; &nbsp; Select Your Preferred Plan</h3>
              <p>Check out our products and select your preferred plan suitable for your budget.</p>
              <h3><FontAwesomeIcon icon={faCheck} width={12} height={12} className='check'/> &nbsp; &nbsp; Monitor Your Payment</h3>
              <p>Track your repayments and view payment receipts.</p>
              <h3><FontAwesomeIcon icon={faCheck} width={12} height={12} className='check'/> &nbsp; &nbsp; Installation In 72hrs</h3>
              <p>As soon as your payment is verified. Installation takes place after 72 hours.</p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className='solar_corp'>
        
        <Row className='d-flex flex-row justify-content-center'>
<Col md={5}>
          <h1>How does it work?</h1>
          <p>At Solarcorp, we've simplified the path to harnessing the power of the sun for your energy needs. Follow these three easy steps to embark on your solar journey</p>
          </Col>
</Row>
<Row>
          <Col md={4}>
            <h4> 1</h4>
            <h5>Create Account</h5>
            <p>Welcome to SolarCorp! Get started on your journey to clean energy by creating an account. Signing up is quick and easy – just provide a few details, and you're on your way to a sustainable future.</p>
          </Col>
          <Col md={4}>
           <h4>2</h4>
            <h5>Select Product Plan</h5>
            <p>Choose the perfect solar plan for you.You can either apply for our convenient Buy Now Pay Later (BNPL) option, spreading the cost over manageable installments, or opt for outright payment for immediate ownership. The choice is yours!</p>
          </Col>
          <Col md={4}>
            <h4>3</h4>
            <h5>Installation After 74hrs</h5>
            <p>Our team springs into action. We guarantee installation within a swift 72 hours. That's right! Your journey to cleaner, more sustainable energy begins just three days after confirming your purchase.</p>
          </Col>
        </Row>
      </Container>


      <Container fluid className='card_me'>
        <Container className='card_container'>
          <Row className='revolution_row d-flex flex-row justify-content-center'>
            <Col md={4}>
            <Card className='card-fluid my-3 mx-4'>
            <img src='Images/ssol1.png' alt='' width={40} height={40} className='img-fluid mt-4 mb-2'/> 
                <h5><strong>Solarcorp Revolution</strong></h5>
      <Card.Body className='cardsx_text'>We believe that average Nigeria shouldn't have to go broke to get access to solar electricity.</Card.Body>
    </Card>
          </Col>
          <Col md={4}>
          <Card className='card-fluid my-3 mx-4'>
          <img src='Images/ssol2.png' alt='' width={40} height={40} className='img-fluid mt-4 mb-2'/>
                <h5><strong>Vision</strong></h5>
      <Card.Body className='cardss_text'>Solarcorp is designed to meet the energy needs of both residential and commercial spaces. Whether you're powering your home or business, we've got you covered.</Card.Body>
    </Card>
          </Col>
          <Col md={4}>
          <Card className='card-fluid my-3 mx-4'>
          <img src='Images/ssol3.png' alt='' width={40} height={40} className='img-fluid mt-4 mb-2'/>
                <h5><strong>Finance</strong></h5>
      <Card.Body className='cardssx_text'>By collaborating with credible financial partners, we provide the option of payment by installment for our Solar products and services, leaving our customers to enjoy more electricity at a cheaper price.</Card.Body>
    </Card>
            </Col>
          </Row>
        </Container>
      </Container>


      <Container className='featured_container'>
        <h1>Featured Products</h1>
        <p>Check out some of our featured products and find the perfect device for you.</p>
        <Row>
          <Col md={3}>
            <img src='Images/sol2.jpg' alt='' className='img-fluid'/>
            <p>Solar Power Generator and <span>#</span></p>
            <p>inverted <span>99.00</span></p>
            <div>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      </div>
          </Col>
          <Col md={3}>
            <img src='Images/sol7.png' alt='' className='img-fluid'/>
            <p>Super Bright Bulbs<span>#299.00</span></p>
            <div>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      </div>
          </Col>
          <Col md={3}>
            <img src='Images/sol1.jpg' alt='' className='img-fluid'/>
            <p>System Battery<span>#49.00</span></p>
            <div>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      </div>
          </Col>
          <Col md={3}>
            <img src='Images/sol7.png' alt='' className='img-fluid'/>
            <p>Solar Power Plant<span>#89.00</span></p>
            <div>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      <FontAwesomeIcon icon={faStar} width={16} height={16} className='star'/>
      </div>
          </Col>
        </Row>
      </Container>

      <Container className='why-choose-us'>
        <Row>
          <Col md={8}>
          <h2>Why Choose Us</h2>
              <h3><FontAwesomeIcon icon={faCheck} width={12} height={12} className='check'/> &nbsp; &nbsp; Budget friendly</h3>
              <p>We partner with the best financial firms to ensure you are able to spend less andenjoy more with our solar lease plans.</p>
              <h3><FontAwesomeIcon icon={faCheck} width={12} height={12} className='check'/> &nbsp; &nbsp; Durability</h3>
              <p>Our products have a lifespan of more than 15 years, so you are sure to use them longer.</p>
              <h3><FontAwesomeIcon icon={faCheck} width={12} height={12} className='check'/> &nbsp; &nbsp; Accessibility
               </h3>
              <p>With well trained engineers and a maintenance team, we are able to respond to our client’s needs within 72hrs .</p>
          </Col>

          <Col>
          <img src='Images/sol4.png' alt='' className='img-fluid'/>
          </Col>
        </Row>
      </Container>


      <Container fluid className='pictures'>
        <Container>
          <Row className='d-flex flex-row justify-content-center mt-5'>
            <Col md={6}>
              <img src='Images/sol3.png' alt='' className='img-fluid mx-5 mt-5 mb-3' width={380}/>
            </Col>
            <Col md={6}>
              <img src='Images/sol3.png' alt='' className='img-fluid mx-5 mt-5 mb-3' width={380}/>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Cardss
