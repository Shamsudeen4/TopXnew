
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
    <div className=' resimg font-worksans  flex h-[100vh] w-[100%] items-center justify-center gap-[200px] sm:flex-col md:flex-col overflow-y-hidden'>
        <div className=' flex items-center justify-center gap-[200px]    '>
        <div className=' text-center '>
            <p className=' text-white font-bold text-[25px]'>Reset Your Password</p>
            <p className=' text-white text-[20px] md:text-[30px]'>
            Thank you for trusting us, 
            it’s <br/> good seeing reset your <br/> password.
            </p>
        </div>
        <div className=' text-black bg-[#a5a6f69c] flex flex-col justify-center gap-[20px] p-[30px] rounded-[10px] md:p-[30px] sm:p-[15px]'>
            <p className=' text-white text-[20px] font-bold'>Reset to a new password</p>
            <div className=' outline-none rounded-[5px] p-2 bg-[#D9D9D9] border-[1px] border-solid border-white flex items-center justify-between' >
           <input type={showPassword ? 'text' : 'password'} name="" id="" placeholder='New Password' className=' outline-none  bg-transparent  text-white'/>
           <i onClick={toggle}>{showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}</i>
           </div>
           <div className=' outline-none rounded-[5px] p-2 bg-[#D9D9D9] border-[1px] border-solid border-white flex items-center justify-between w-[20em]' >
           <input type={show ? 'text' : 'password'} name="" id="" placeholder='Confirm Password' className=' outline-none  bg-transparent text-white'/>
           <i onClick={handle}>{show ? <FaRegEye/> : <FaRegEyeSlash/>}</i>
           </div>
           <button  className=' bg-[#7879F1] p-[7px] rounded-[20px] text-white border-solid border-white'>Reset Password  </button>
           
        
        </div>
        </div>
        
    </div>
  )
}

export default Reset