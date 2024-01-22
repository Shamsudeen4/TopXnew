import React from 'react'
import './Forgetpass.css'
function Forgetpass() {
  return (
    <div className='img  flex justify-evenly items-center sm:flex-col sm:p-[20px]'>
      <div className='flex flex-col gap-[20px] items-center text-center'>
        <h2  className='text-white font-bold text-3xl'>uhhh Sorry!</h2>
        <p className=' text-lg font-light text-gray-100'>Sorry to hear that you forgot <br className='sm:hidden'/> your Top X account password, <br className='sm:hidden'/> kindly enter your email <br className='sm:hidden'/> address to reset your password!</p>
      </div>
      <form action=""  className='flex text-center flex-col gap-[20px] bg-[#A5A6F6] p-[30px] rounded-xl w-[30%] sm:w-full'>
        <h2 className='text-2xl text-[#FFFFFF]'>Reset your password now</h2>
        <input type="email" className='bg-[#D9D9D9] w-full outline-none border-0 px-2 h-[6vh] rounded-lg'/>
        <button className='bg-[#7879F1] rounded-xl p-[10px] text-[#FFFFFF]'>Continue</button>
      </form>
    </div>
  )
}

export default Forgetpass