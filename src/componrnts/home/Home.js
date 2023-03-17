import React from 'react'
import Profile from '../profile/Profile.js'

const Home = (props) => {
  return (
    <div>
    {
        props.data?.map((el) => <Profile data = {el} key = {el.id} />)

    }
  
   
    </div>
  )
}

export default Home
