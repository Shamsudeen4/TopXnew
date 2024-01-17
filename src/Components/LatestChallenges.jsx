import React from 'react'

function LatestChallenges() {
  return (
    <div className='font-poppins bg-[#A5A6F6B2]  flex flex-col gap-[70px] w-[100vw]  sm:py-[5%] justify-center items-center'>
      <div className=' flex flex-col lg:gap-[50px] lg:p-11 sm:gap-[20px] sm:items-center'>
        <div>
            <h1 className=' font-semibold text-[20px] sm:text-[18px]'>Latest Challenges</h1>
        </div>
        <div className=' flex flex-col items-end lg:gap-9 sm:gap-4 sm:m-5'>
            <table className=' overflow-scroll'>
                <tr className=' bg-[#7879F1] text-center p-5 text-[white] '>
                    <th className=' font-medium lg:p-6 lg:pr-[160px] sm:py-2 sm:text-[10px] sm:pr-[0px] sm:w-[25vw]'>Player's Name</th>
                    <th className='font-medium lg:p-6 sm:px-[6px] sm:text-[10px] sm:w-[60px] leading-3'>Game Time (A T)</th>
                    <th className='font-medium lg:p-6 sm:px-[6px] sm:text-[10px] leading-3'>Amount Stake</th>
                    <th className='font-medium lg:p-6 sm:px-[6px] sm:text-[10px] leading-3'>Winners Take Home</th>
                    <th className='font-medium lg:p-6 sm:px-[6px] sm:text-[10px] leading-3'> Action</th>
                </tr>
                <tr className=' text-center  '>
                    <td className='lg:px-7 lg:py-3 sm:py-[15px]  lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left sm:text-[10px] sm:pl-[10px]'>1. Toshmoney</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6] sm:text-[10px]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3 sm:text-[10px]'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1] sm:text-[10px]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3 sm:text-[10px]'><button className=' hover:text-[#F178B6] duration-300 leading-[11px]'>Accept</button></td>
                </tr>
             
                
            </table>
            <button className=' text-[#F178B6] text-[18px] sm:text-[12px] underline hover:text-[black] duration-300'><a href="/latest"> View All</a></button>
        </div>
      </div>
    </div>
  )
}

export default LatestChallenges
