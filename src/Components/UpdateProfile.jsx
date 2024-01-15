import React from 'react'

function UpdateProfile() {
  return (
<div className='font-poppins w-full lg:h-[80vh] sm:h-[100vh] flex flex-col justify-center items-center'>
      <div className=' flex flex-col items-center gap-16'>
        <div>
            <h1 className=' text-[23px]'>Update Profile</h1>
        </div>
        <form className=' flex flex-col gap-[40px] items-start sm:gap-[45px]'>
            <div className=' flex flex-col gap-3 '>
                <label className='' htmlFor="email">Email</label>
                <input className='border-[1px] rounded-[10px] outline-none w-[30vw] sm:w-[70vw] h-[6vh] lg:pl-11 sm:pl-4 active:border-[#F178B6]  duration-150' type="email" placeholder='Enter your Email' />

            </div>
            <div className='flex flex-col gap-3 '>
                <label htmlFor="amount">Full Name </label>
                <input className='border-[1px] rounded-[10px] outline-none w-[30vw] sm:w-[70vw] h-[6vh] lg:pl-11 sm:pl-4 active:border-[#F178B6]  duration-150' type="text" placeholder='1234567890' />
            </div>
            <div className=' flex flex-col gap-3 '>
                    <label htmlFor="amount">Gender </label>
                    <select className='sm:w-[70vw]' name="" id="">
                        <option value="">...</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Rather Not Say</option>
                    </select>
            </div>
              
            <button className=' bg-[#7879F1] px-6  py-3 rounded-md'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
