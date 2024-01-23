import React, { useState } from 'react'
import './Forgetpass.css'
function Forgetpass() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(!email){
        throw new Error("Email is required!!")
      }
      const response = await fetch('https://topxx.onrender.com/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message === "Failed to Reset Password");
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    }
  };
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
      <form action="" onChange={handleSubmit} className='flex text-center flex-col gap-[20px] bg-[#A5A6F6] p-[30px] rounded-xl w-[30%] sm:w-full'>
        <h2 className='text-2xl text-[#FFFFFF]'>Reset your password now</h2>
        <input type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className='bg-[#D9D9D9] w-full outline-none border-0 px-2 h-[6vh] rounded-lg'/>
        <button className='bg-[#7879F1] rounded-xl p-[10px] text-[#FFFFFF]'>Continue</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Forgetpass