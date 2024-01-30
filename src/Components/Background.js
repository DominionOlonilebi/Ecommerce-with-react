
import React from 'react'
import Typewriter from './Typewriter'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import CIcon from '@coreui/icons-react'
import { cilCircle } from '@coreui/icons'
import Cardss from './Cardss'
import Sections from './Sections'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyTyped from './MyTyped';
import Float from './Float';


const Background = () => {
  
  return (
    <>
    <div  className='background_section'>
      <Container fluid className='background_container'>
        <Container>
        <Row>
          <Col md={7} sm={12}>
<h1>
    <span className='heading'>Let's Power Your Home<br/> While </span><br/> You <span className='type_color'><MyTyped/></span>
</h1>

<p>Join over 1000 connected homes and business that have eliminated generators and are now saving with solarcorp</p>
<Button className='get'><a href='/products'>Get Products</a></Button>
<Button className='logins'><a href='/login'>Login</a> </Button>
<div className='listing_list'>
<FontAwesomeIcon icon={faCircle} width={12} height={12} className='circles'/>&nbsp; &nbsp;<span className='list'>Trusted across 25 Cities</span>
<span className='listing'><FontAwesomeIcon icon={faCircle} width={12} height={12} className='circles'/>&nbsp; &nbsp;<span className='lists'>5,000 Homes Powered</span></span>
</div>
</Col>
<Col md={5} sm={12}>
  <div className="bouncing-container mb-5">
      <img src="Images/sol5.png" alt="Bouncing Image" className="bouncing-image" width={300} height={590}/>
    </div>
</Col>
</Row>
</Container>
</Container>

<h5 className='mx-4'><i>Trusted By</i></h5>
<Float/>
    </div>
    <Cardss/>
    <Sections/>
    </>
  )
}

export default Background
