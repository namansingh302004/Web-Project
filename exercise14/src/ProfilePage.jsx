import { useState } from 'react'
import './App.css'

import './profilepage.css'
import ProfileImage from './ProfileImage'
import Userinfo from './Userinfo'
import Userposts from './Userposts'

function ProfilePage() {
  

  return (
    <>
    <ProfileImage/>
    <Userinfo/>
    <Userposts/>
      
    </>
  )
}

export default ProfilePage
