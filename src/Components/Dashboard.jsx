import React, { useState } from 'react'
import logo from '../Images/Topxtransparent black 1.png'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
function Dashboard() {
  const[showBalance, setShowBalance] = useState(false);
  const availablebal = 25000;
  const toggle = ()=> {
    setShowBalance(!showBalance)
  }
  return (
    <div>
      <div className=' flex justify-center my-[5%] sm:pt-[16%]  sm:flex-col '>
      <div className=' font-worksans flex flex-col items-start gap-[80px] sm:items-center sm:gap-[30px]'>
        <div className=' flex items-center justify-center sm:flex-col-reverse sm:gap-[30px]  '>
            <div className=' flex flex-col'>
                <h1 className=' text-[30px] sm:text-[22px]'>Hey Tosh, <br/> Welcome to Top X</h1>
                <h3 className=' w-[55%] text-[14px] text-[#00000080] sm:w-[75vw]'>There are many possibilities you can achieve with us. Let’s help you gain reward for what you do doing the most!</h3>
            </div>
            <div>
                <img className=' sm:w-[40vw]' src={logo} alt="" />
            </div>
        </div>
        <div className=' flex items-end lg:px-[100px] lg:py-[50px] 
         bg-[#7879F1] gap-[550px] rounded-[50px] sm:flex-col 
         sm:gap-[20px] sm:rounded-[10px] sm:items-start sm:w-[100%] 
         sm:pl-[50px] sm:py-[40px]'>
            <div className=' flex flex-col items-start gap-3 '>
              <div className=' flex items-center gap-[30px] sm:gap-[0px] '>
                <p className=' text-[white] text-[20px] sm:w-[60vw]'>Available Balance</p>
                <i onClick={toggle}>
                  {showBalance ? <FaRegEye size={22}/> : <FaRegEyeSlash size={22}/> }
                </i>
              </div>
              <h1 className=' text-[35px]'>{showBalance ? `NGN ${availablebal}` : "*****"}</h1>
              <h4 className=' text-[white] text-[20px]'>Estimated Total Balance</h4>
              
             <a href="/fund"><button className=' bg-[#373742] text-[white]  rounded-md px-[20px] py-[9px] '>Fund Wallet</button></a>
             
            </div>
            <div>
             <a href="/withdraw"> <button className='bg-[white] px-[20px] py-[8px] rounded-md'>Withdraw Funds</button></a>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
