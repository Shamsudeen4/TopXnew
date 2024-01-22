import React from 'react'
import Navbar from './Navbar'
import Login from './Login'

function Loginp() {
  return (
    <div className=' h-[100vh] overflow-y-hidden sm:flex flex-col gap-[75px]'>
      <Navbar/>
      <Login/>
    </div>
  )
}

export default Loginp
