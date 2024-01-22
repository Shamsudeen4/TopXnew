import React from 'react'
import Navbar from './Navbar'
import Signup from './Signup'

function SignUpp() {
  return (
    <div className=' overflow-y-hidden h-[100vh] sm:flex flex-col gap-[75px] '>
      <Navbar/>
      <Signup/>
    </div>
  )
}

export default SignUpp
