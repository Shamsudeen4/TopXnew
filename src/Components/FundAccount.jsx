import React from 'react'

function FundAccount() {
  return (
    <div className='font-poppins w-full h-[80vh] flex flex-col justify-center items-center'>
      <div className=' flex flex-col items-center gap-16'>
        <div>
            <h1 className=' text-[23px]'>Withdraw Your Funds</h1>
        </div>
        <form className=' flex flex-col gap-[40px] items-start'>
            <div className=' flex flex-col gap-3 '>
                    <label className='' htmlFor="amount">Bank</label>
                <select name="" id="" className=' border-[1px] rounded-[10px] outline-none w-[30vw] h-[6vh] pl-5'>
                    <option value="">..</option>
                    <option value="">UBA</option>
                    <option value="">Gt Bank</option>
                </select>
            </div>
            <div className=' flex flex-col gap-3 items-end '>
                <div className='flex flex-col gap-3 '>
                    <label htmlFor="amount">Account Number </label>
                    <input className='border-[1px] rounded-[10px] outline-none w-[30vw] h-[6vh] pl-11 active:border-[#F178B6]  duration-150' type="text" placeholder='1234567890' />
                </div>
                <div>
                    <p className=' text-[14px]'>You’re about to withdraw to: <span className=' text-[#7879F1]'>Ismaheel Abdulmaleeq</span></p>
                </div>
            </div>
                <div className=' flex flex-col gap-3 '>
                    <label htmlFor="amount">Amount </label>
                    <input className='border-[1px] rounded-[10px] outline-none w-[30vw] h-[6vh] pl-11 active:border-[#F178B6]  duration-150' type="text" placeholder='Enter Amount' />
                </div>
              
            <button className=' bg-[#7879F1] px-6  py-3 rounded-md'>Withdraw</button>
        </form>
      </div>
    </div>
  )
}

export default FundAccount
