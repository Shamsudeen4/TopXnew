import React from 'react'

function Latest() {
  return (
    <div className='font-poppins   flex flex-col gap-[70px] w-[100vw]   sm:pt-[22%] justify-center items-center'>
      <div className=' flex flex-col lg:gap-[50px] lg:p-11 sm:gap-[10px] sm:items-center'>
        <div>
            <h1 className=' font-semibold text-[20px]'>Latest Challenges</h1>
        </div>
        <div className=' flex flex-col items-end lg:gap-9 sm:gap-4 sm:m-5'>
            <table className=' overflow-scroll'>
                <tr className=' bg-[#7879F1] text-center p-5 text-[white] '>
                    <th className=' font-medium lg:p-6 sm:p-2 lg:pr-[160px] sm:text-[10px] sm:w-[25vw]  sm:pr-[0px]'>Player's Name</th>
                    <th className='font-medium lg:p-6 sm:text-[10px] sm:w-[25vw]'>Game Time (A T)</th>
                    <th className='font-medium lg:p-6 sm:text-[10px] leading-[20px]'>Amount Stake</th>
                    <th className='font-medium lg:p-7 sm:text-[10px] text-center'>Winners Take Home</th>
                    <th className='font-medium lg:p-6 sm:text-[10px]'> Action</th>
                </tr>
                <tr className=' text-center  '>
                    <td className='lg:px-7 lg:py-3 sm:py-[15px]  lg:pr-[160px] text-[#FFF] bg-[#F178B6] text-left sm:text-[10px] sm:pl-[15px]'>1. Toshmoney</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6] sm:text-[10px]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3 sm:text-[10px]'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1] sm:text-[10px]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3 sm:text-[10px]'><button className=' hover:text-[#F178B6] duration-300 leading-[11px]'>Accept</button></td>
                </tr>
     
                
            </table>
            
        </div>
      </div>
    </div>
  )
}

export default Latest
