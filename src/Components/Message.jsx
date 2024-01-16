import React from 'react'
import './Message.css'
function Message() {
  return (
    <div className=' mimg font-worksans bg-red-700 h-[100vh] w-[100%] flex flex-col items-center justify-center'>
       <div className=' bg-[#5d5fef60] flex flex-col items-center justify-center  absolute left-0 top-0 right-0 bottom-0'>
       <div className=' bg-[#A5A6F6B2] p-[75px] sm:p-[30px] md:p-[60px] rounded-[15px]'>
        <p className=' text-center text-white text-[25px]'>
        Thank you for submitting <br/> your email,
         we would <br/>  send you a reset link 
        to <br/>continue changing your <br/>  password!
        </p>
        </div>
       </div>
    </div>
  )
}

export default Message