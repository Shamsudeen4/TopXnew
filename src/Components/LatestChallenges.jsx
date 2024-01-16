import React from 'react'

function LatestChallenges() {
  return (
    <div className='font-poppins bg-[#A5A6F6B2]  flex flex-col gap-[70px] w-[100vw] lg:h-[100vh] sm:py-[5%] justify-center items-center'>
      <div className=' flex flex-col lg:gap-[50px] lg:p-11 sm:gap-[20px] sm:items-center'>
        <div>
            <h1 className=' font-semibold text-[20px]'>Latest Challenges</h1>
        </div>
        <div className=' flex flex-col items-end lg:gap-9 sm:gap-4 sm:m-5'>
            <table className=' '>
                <tr className=' bg-[#7879F1] text-center p-5 text-[white]'>
                    <th className=' font-medium lg:p-6 lg:pr-[160px] sm:text-[12px] sm:pr-[40px]'>Player's Name</th>
                    <th className='font-medium lg:p-6 sm:text-[12px]'>Game Time (A T)</th>
                    <th className='font-medium lg:p-6 sm:text-[12px]'>Amount Stake</th>
                    <th className='font-medium lg:p-6 sm:text-[12px]'>Winners Take Home</th>
                    <th className='font-medium lg:p-6 sm:text-[12px]'> Action</th>
                </tr>
                <tr className=' text-center '>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left sm:text-[11px]'>1. Toshmoney</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6] sm:text-[11px]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3 sm:text-[11px]'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1] sm:text-[11px]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3 sm:text-[11px]'><button className=' hover:text-[#F178B6] duration-300'>Accept</button></td>
                </tr>
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left'>2. Yinkus</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Accept</button></td>
                </tr>
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left'>3. Yusgamer</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Accept</button></td>
                </tr>
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left'>4. Paulgeek</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Accept</button></td>
                </tr>
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left'>1. Toshmoney</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Accept</button> </td>
                </tr>
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left'>1. Toshmoney</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Accept</button> </td>
                </tr>
                <tr className=' text-center sm:text-[11px] '>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left '>1. Toshmoney</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Accept</button></td>
                </tr>
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left '>1. Toshmoney</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300' >Submit Screenshot</button></td>
                </tr>
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[#F178B6] bg-[#373742] text-left'>1. Toshmoney</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Submit Screenshot</button></td>
                </tr>
                
            </table>
            <button className=' text-[#F178B6] text-[18px] underline hover:text-[black] duration-300'><a href="/newChallenge"> View All</a></button>
        </div>
      </div>
    </div>
  )
}

export default LatestChallenges
