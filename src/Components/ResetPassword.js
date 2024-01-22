import React from 'react'
import Reset from './Reset'
import Navbar from './Navbar'

function ResetPassword() {
  return (
    <div className=' h-[100vh] overflow-y-hidden sm:flex flex-col gap-[72px] '>
      <Navbar/>
      <Reset/>
    </div>
  )
}

export default ResetPassword
