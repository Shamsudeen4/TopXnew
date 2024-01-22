import React from 'react'
import Navbar from './Navbar'
import Forgetpass from './Forgetpass'

function ForgetPassword() {
  return (
    <div className=' h-[100vh] overflow-y-hidden sm:flex flex-col gap-[75px]'>
      <Navbar/>
      <Forgetpass/>
    </div>
  )
}

export default ForgetPassword
