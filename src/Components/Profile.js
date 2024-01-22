import React from 'react'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const Profile = () => {

const location=useLocation()

  return (
    <div className='profiles'>
      <h2>My Profile</h2>
      <h1>
        Hello {location.state.id} and welcome to Solarcorp
      </h1>
      <p>Do you want to change your name? <a href='/'>Edit</a>  <span><a href='/'>Sign out</a></span></p>

      <Button><a href='/cart'>Click here to Proceed</a></Button>
    </div>
  )
}

export default Profile
