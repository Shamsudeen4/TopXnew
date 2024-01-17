import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import './Login.css'
function Login() {
  const[showPassword, setShowPassword] = useState(false)
  const toggle = () =>{
    setShowPassword(!showPassword)
  }
  return (
      <div className=' back-img flex items-center font-worksans overflow-x-hidden lg:overflow-x-hidden sm:overflow-x-hidden md:overflow-x-hidden'>
        <div className='  font-worksans flex items-center justify-center gap-[170px] md:flex-col absolute left-0 top-0 right-0 bottom-0 sm:flex-col bg-[#5d5fef60] '>
        <div className=' text-center text-[20px] font-light'>
            <p className=' text-gray-200'>
           <span className=' text-white text-[25px] font-bold'> Welcome Back!</span> <br/>
            Log Into your <span className=' text-white text-[25px] font-bold'>Top X</span> account <br/> to continue 
            enjoying reward <br/>
             for what you love doing the <br/> most!
            </p>
        </div>
        <div className=' bg-[#a5a6f69c] flex flex-col justify-center gap-[20px] p-[30px] rounded-[10px] md:p-[15px] sm:p-[15px]'>
            <p className=' text-white text-lg'>It’s good to see you again!</p>
            <input type="text" name="" id="" placeholder='Username' className=' outline-none rounded-[5px] p-2 bg-[#D9D9D9] border-[1px] border-solid border-white pr-[80px]' />
           <div className=' outline-none rounded-[5px] p-2 bg-[#D9D9D9] border-[1px] border-solid border-white flex items-center justify-between' >
           <input type={showPassword ? 'text' : 'password'} name="" id="" placeholder='Password' className=' outline-none  bg-transparent '/>
            <i onClick={toggle}>{showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}</i>
           </div>
           <p className=' text-white text-right'>Forgot Password?</p>
           <button className=' bg-[#7879F1] p-[7px] rounded-[20px] text-white border-solid border-white'>Login</button>
        </div>
    </div>
      </div>
  )
}

export default Login