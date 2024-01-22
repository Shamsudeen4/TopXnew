import React from 'react'
import './Forgetpass.css'
function Forgetpass() {
  return (
    <div className=' img font-worksansflex items-center justify-center gap-[200px] h-[100vh] w-[100%] sm:flex-col sm:gap-[80px] lg:overflow-x-hidden sm:overflow-x-hidden md:overflow-x-hidden '>
      <div className=' flex items-center justify-center  absolute left-0 top-0 right-0 bottom-0 sm:flex-col md:flex-col gap-[200px] sm:gap-[80px]  sm:mt-[52%]'>
      <div className=' text-center'>
        <p className=' text-white text-[29px] font-bold'>uhhh Sorry!</p>
        <p className=' text-gray-200 font-light text-[22px]'>
        Sorry to hear that you forgot<br/>
         your <span className=' text-white text-[25px] font-semibold'>Top X</span> account password,<br/>
          kindly enter your email<br/>
           address to reset <br/>
            your password!<br/>
        </p>
        </div>
        <div className=' bg-[#A5A6F6B2] flex flex-col p-[50px] justify-center gap-[30px] rounded-[10px] sm:p-[25px]'>
            <p className=' text-[25px] text-white font-bold'>Reset your password now</p>
            <input type="email" name="" id="" placeholder='Email' className=' outline-none rounded-[10px] p-2 border-[1px] bg-[#f7f7f7af] border-solid border-white' />
            <button className=' text-white text-lg text-bold rounded-[20px] p-2 border-[1px] border-solid border-white bg-[#6a6aff] '>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Forgetpass