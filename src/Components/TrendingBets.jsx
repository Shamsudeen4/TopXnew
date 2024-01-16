import React from 'react'

function TrendingBets() {
  return (
    <div className='font-poppins bg-[white]  flex flex-col gap-[70px] w-[100vw] sm:mt-[10%] lg:h-[100vh] justify-center items-center'>
      <div className=' flex flex-col lg:gap-[50px] lg:p-8 sm:items-center'>
        <div>
            <h1 className=' font-normal text-[22px]'>Trending Bets</h1>
        </div>
        <div className=' flex flex-col items-end lg:gap-9 sm:m-5'>
            <table className=' '>
                <tr className=' bg-[#7879F1] text-center lg:p-5 text-[white] sm:text-[12px]'>
                    <th className=' font-medium lg:p-6 lg:pr-[160px]'>Player's Name</th>
                    <th className='font-medium lg:p-6 '>Game Time (A T)</th>
                    <th className='font-medium lg:p-6'>Amount Stake</th>
                    <th className='font-medium lg:p-6'>Winners Take Home</th>
                    <th className='font-medium lg:p-6'> Status</th>
                </tr>
                <tr className=' text-center  pt-[2%] sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[white] pt-[4%] bg-[#F178B6] lg:text-left sm:text-center '>1. Toshmoney VS Toshbaba</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6] pt-[4%]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3 pt-[4%]'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1] pt-[4%]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3 pt-[4%]'><button className=' hover:text-[#F178B6] duration-300'>Ongoing</button></td>
                </tr>
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[white] bg-[#F178B6] text-left sm:text-center'>1. Toshmoney VS Toshbaba</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Ongoing</button></td>
                </tr>
                
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[white] bg-[#F178B6] text-left sm:text-center'>1. Toshmoney VS Toshbaba</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Ongoing</button></td>
                </tr>
                
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[white] bg-[#F178B6] text-left sm:text-center'>1. Toshmoney VS Toshbaba</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Ongoing</button></td>
                </tr>
                
                <tr className=' text-center sm:text-[11px]'>
                    <td className='lg:px-7 lg:py-3 lg:pr-[160px] text-[white] bg-[#F178B6] text-left sm:text-center'>1. Toshmoney VS Toshbaba</td>
                    <td className='lg:px-7 lg:py-3 text-[#F178B6]'>04:45 PM</td>
                    <td className='lg:px-7 lg:py-3'>NGN 20,000</td>
                    <td className='lg:px-7 lg:py-3 text-[#7879F1]'>NGN 40,000</td>
                    <td className='lg:px-7 lg:py-3'><button className=' hover:text-[#F178B6] duration-300'>Ongoing</button></td>
                </tr>
                
            </table>
            <button className=' text-[#F178B6] text-[18px] underline hover:text-[black] duration-300'><a href="/trend"> View All Bets</a></button>
        </div>
      </div>
    </div>
  )
}

export default TrendingBets
