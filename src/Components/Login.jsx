import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import './Login.css';
import { Navigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [redirect, setRedirect] = useState(false)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!username){
      throw new Error("Username is required!!")
    }
    if(!password){
      throw new Error("Password is required!!")
    }

    fetch('https://topxx.onrender.com/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage(data.message);

        if (data.message === 'Logged in successfully') {
          setRedirect(false)
        }
        setRedirect(false)
        
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponseMessage('An error occurred while processing your request.');
      });
  };
  if(redirect){
    return <Navigate to={"/"}/>
  }

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='back-img flex justify-evenly items-center sm:flex-col sm:p-[20px]'>
      <div className='flex flex-col gap-[20px] items-center text-center'>
        <h2 className='text-white font-bold text-3xl'>Welcome Back!</h2>
        <p className='text-lg font-light text-gray-100'>
          Log Into your <span className='text-white text-xl'>Top X</span> account <br className='sm:hidden' /> to continue enjoying reward <br className='sm:hidden'/> for what you love doing the <br className='sm:hidden'/> most!
        </p>
      </div>
      <form className='flex text-center flex-col gap-[20px] bg-[#A5A6F6] p-[30px] rounded-xl w-[30%] sm:w-full' onSubmit={handleSubmit}>
        <h2 className='text-2xl text-[#FFFFFF]'>It’s good to see you again!</h2>
        <div>
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleUsernameChange}
            className='bg-[#D9D9D9] w-full outline-none border-0 px-2 h-[6vh] rounded-lg'
            placeholder='Username'
          />
        </div>
        <div className='flex justify-between px-2 items-center bg-[#D9D9D9] rounded-lg'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            value={password}
            onChange={handlePasswordChange}
            className='w-full outline-none border-0 bg-transparent h-[6vh] rounded-lg'
            placeholder='Password'
          />
          <i onClick={toggle}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</i>
        </div>
        <button className='flex justify-end text-[#FFFFFF]'>Forget Password?</button>
        <button type='submit' className='bg-[#7879F1] rounded-xl p-[10px] text-[#FFFFFF]'>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
