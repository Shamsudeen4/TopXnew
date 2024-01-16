import React from 'react'

function FundWallet() {
  return (
    <div className='font-poppins w-full lg:h-[70vh] sm:h-[100vh] flex flex-col justify-center items-center'>
      <div className=' flex flex-col items-center gap-16'>
        <div>
            <h1 className=' text-[23px]'>Fund Wallet</h1>
        </div>
        <form className=' flex flex-col gap-[40px] items-start'>
            <div className=' flex flex-col gap-3 '>
                <label className='' htmlFor="amount">Amount</label>
                <input className=' border-[1px] rounded-[10px] outline-none w-[30vw]  sm:w-[70vw] h-[6vh] pl-11 focus:border-[#F178B6] duration-150 ' type="text" placeholder='Enter Amount in Number' />
            </div>
            <div className=' flex flex-col gap-3 '>
                <label htmlFor="amount">Email </label>
                <input className='border-[1px] rounded-[10px] outline-none w-[30vw] sm:w-[70vw] h-[6vh] pl-11 focus:border-[#F178B6]  duration-150' type="email" placeholder='example@yahoo.com' />
            </div>
            <button className=' bg-[#F178B6] px-6 text-[white] py-3 rounded-md'>Fund Now</button>
        </form>
      </div>
    </div>
  )
}

export default FundWallet
