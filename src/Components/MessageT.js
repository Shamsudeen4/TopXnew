import React from 'react'
import Navbar from './Navbar'
import Message from './Message'

function MessageT() {
  return (
    <div className=' h-[100vh] overflow-y-hidden sm:flex flex-col gap-[70px]'>
      <Navbar/>
      <Message/>
    </div>
  )
}

export default MessageT
