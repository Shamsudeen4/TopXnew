import React, { useState } from  'react'
import img1 from '../Images/Sign-up.png'
import dep from '../Images/Play.png'
import play from '../Images/Deposite.png'

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import './Signup.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const[showPassword, setShowPassword] = useState(false)
  const[email, setEmail]= useState("")
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")
  const[isclick, setIsClick] = useState(false)
  const[terms, setTerms] = useState(false)
  
  const toggle = () => {
    setShowPassword(!showPassword)
  }
  const[show, setShow] = useState(false)
  const handle = () => {
    setShow(!show)
  }

  // Submit data to the server
  async function handlerSignUp(e){
    setIsClick(true)
    e.preventDefault();

    if(!username){
      toast.error("Please provide your username")
      setIsClick(false)
      return;
    }

    if(!email){
      toast.error("Please provide your email address")
      setIsClick(false)
      return;

    }

    if(!password){

      toast.error("Please create a password")
      setIsClick(false)
      return;
    }

    if(!confirmPassword){
   
      toast.error("Please confirm your password")
      setIsClick(false)
      return;
    }
    if(terms !== true){
   
      toast.error("Please confirm you are above 18")
      setIsClick(false)
      return;
    }

    if(password !== confirmPassword){
      toast.error('Passwords do not match')
      setIsClick(false)
      return;
    }

    const response = await fetch("https://topxx.onrender.com/signup",{
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({email, username, password, confirmPassword}),
      method:"post"
    }).then(res => res.json())

    // toast.success(response.message)
    if(response.error){
      toast.error(response.error);
      setIsClick(false)
    }

    if(response.msg){
      toast.success(response.msg)
      setIsClick(false);
      // window.localStorage()
    }
    
    


    console.log(response);
  }
  return (
    <div className='backimg   font-worksans '>
        <div className=' flex text-[white] items-center lg:gap-[200px] justify-center pt-[2%] sm:flex-col sm:gap-[20px] sm:pt-[4%]'>
          <div className=' flex flex-col gap-[60px]'>
            <div className=' flex flex-col gap-3 text-center items-center sm:gap-1'>
              <h1 className=' font-semibold text-[40px] sm:text-[25px]'>Are You A Gamer?</h1>
              <h2 className='text-[35px] w-[30vw] leading-[45px] font-extralight sm:text-[18px] sm:w-[75vw] sm:leading-[20px]'><span className=' font-semibold '>Top X </span> is the best platform to earn reward for your passion!</h2>
            </div>
            <div className=' flex flex-col gap-[30px] items-center sm:hidden '>
              <h3 className=' text-[25px] underline'>Get started in 3 steps</h3>
              <div className=' flex gap-[50px] sm:gap-[20px]'>
                
                <div className=' flex flex-col items-center gap-4 '>
                    <img className='w-[9vw] sm:w-[17vw]' src={img1} alt="" />
                   <p className=' w-[8vw] sm:w-[28vw]'>Sign Up In less than 15 seconds</p>
                </div>
              
                <div className=' flex flex-col items-center gap-4  mt-[30px]'>
                   
                    <img className='w-[9vw] sm:w-[17vw]' src={dep} alt="" />
                    <p className=' w-[10vw] sm:w-[28vw]'>Deposit & challenge another gamer</p>
                  
                </div>
                <div className=' flex flex-col items-center gap-4 mt-[60px] '>
                  
                    <img className='w-[9vw] sm:w-[17vw]' src={play} alt="" />
                    <p className=' w-[10vw] sm:w-[28vw]'>Play and claim rewards every day</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div>
              <form action="" className='flex flex-col gap-[30px] bg-[#A5A6F6B2] p-[35px] rounded-[20px] text-[white] sm:gap-[20px] sm:p-[20px]' onSubmit={handlerSignUp}>
                <h4 className=' text-[30px] sm:text-[20px]'><span className=' font-semibold'> Sign up. </span>It's fast!</h4>
                <input name='username' value={username} onChange={(e)=> setUsername(e.target.value)} className='bg-[#D9D9D9] h-[6vh] w-[25vw] rounded-[10px] pl-[10px] outline-none placeholder:text-[white] sm:w-[75vw]' type="text" placeholder='Username'  />
                <input name='email' value={email} onChange={(e)=> setEmail(e.target.value)} className=' bg-[#D9D9D9] h-[6vh] w-[25vw] rounded-[10px] pl-[10px] outline-none placeholder:text-[white] sm:w-[75vw]' type="email" placeholder='Email' />
                
                <div className=' flex bg-[#D9D9D9] h-[6vh] w-[25vw]  rounded-[10px] items-center px-[10px] sm:w-[75vw] '>
                <input name='password' value={password} onChange={(e)=> setPassword(e.target.value)} className={` bg-transparent h-[6vh] w-[25vw] rounded-[10px] pl-[10px] outline-none placeholder:text-[white] sm:w-[70vw]`} type={show ? "text" : "password"} placeholder='Confirm Password' />
                <i onClick={handle}>{show ? <FaRegEye color='black'/> : <FaRegEyeSlash color='black'/>}</i>
                </div>
                <div className=' flex bg-[#D9D9D9] h-[6vh] w-[25vw] rounded-[10px] items-center px-[10px] sm:w-[75vw]'>
                <input name='confirmPassword' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} className={` bg-transparent h-[6vh] w-[25vw] rounded-[10px] pl-[10px] outline-none placeholder:text-[white] sm:w-[70vw]`} type={showPassword ? "text" : "password"} placeholder='Confirm Password' />
                <i onClick={toggle}>{showPassword ? <FaRegEye color='black'/> : <FaRegEyeSlash color='black'/>}</i>
                </div>
                <div className=' flex items-center gap-2 '>
                <input  type="checkbox" name="" id="" value={terms} onClick={()=>{setTerms(true)}} required/>
                <p className=' w-[24vw] text-[20px] leading-[25px] sm:w-[70vw] sm:text-[14px] sm:leading-[20px]'>I’m over 18 years old and I agree to the Legal terms and Privacy Policy.</p>
                </div>
                <button className='bg-[#7879F1] py-[14px] rounded-[30px]'>{isclick ? "Please Wait..." : "Join"}</button>
                {/* <Toaster /> */}
                <ToastContainer
                position='top-left' 
                />
              </form>
          </div>
        </div>
    </div>
  )
}

export default Signup
