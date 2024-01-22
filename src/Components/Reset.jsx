
import React, { useState } from 'react'


import './Reset.css'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function Reset() {
  const[showPassword, setShowPassword] = useState(false)
  const toggle = () => {
    setShowPassword(!showPassword)
  }
  const[show, setShow] = useState(false)
  const handle = () => {
    setShow(!show)
  }
 
  return (
    <div className=' resimg font-worksans  flex h-[100vh] w-[100%] items-center justify-center   md:flex-col overflow-y-hidden'>
        <div className=' flex items-center justify-center gap-[200px] z-[999] mb-[7%] sm:flex-col sm:gap-[80px]    '>
        <div className=' text-center '>
            <p className=' text-white font-bold text-[30px]'>Reset Your Password</p>
            <p className=' text-white text-[20px] md:text-[18px]'>
            Thank you for trusting us, 
            it’s <br/> good seeing reset your <br/> password.
            </p>
        </div>
        <form className=' text-black bg-[#A5A6F6B2] flex flex-col justify-center gap-[20px] p-[50px] rounded-[10px] md:p-[30px] sm:p-[20px]'>
            <p className=' text-white text-[20px] font-bold'>Reset to a new password</p>
            <div className=' outline-none rounded-[5px] p-2 bg-[#D9D9D980] border-[1px] border-solid border-white flex items-center justify-between' >
           <input type={showPassword ? 'text' : 'password'} name="" id="" placeholder='New Password' className=' outline-none  bg-transparent  text-white'/>
           <i onClick={toggle} className=' cursor-pointer'>{showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}</i>
           </div>
           <div className=' outline-none rounded-[5px] p-2 bg-[#D9D9D980] border-[1px] border-solid border-white flex items-center justify-between w-[20em]' >
           <input type={show ? 'text' : 'password'} name="" id="" placeholder='Confirm Password' className=' outline-none  bg-transparent text-white'/>
           <i onClick={handle}  className=' cursor-pointer'>{show ? <FaRegEye/> : <FaRegEyeSlash/>}</i>
           </div>
           <button  className=' bg-[#7879F1] p-[7px] rounded-[20px] text-white border-solid border-white'>Reset Password  </button>
           
        
        </form>
        </div>
        
    </div>
  )
}

export default Reset