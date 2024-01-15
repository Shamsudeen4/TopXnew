import React from 'react'

function UserProfile() {
  return (
    <div className=' w-full lg:h-[80vh] sm:h-[100vh] flex sm:mt-[8%]  justify-center items-center'>
      <div className=' font-poppins flex gap-[50px] flex-col sm:m-6'>
       
        <div className='flex items-center flex-col gap-6'>
            <div>
            <h1 className=' font-semibold text-[24px] '>User Profile</h1>
            </div>
            <div className=' flex flex-col lg:gap-4 sm:gap-[6px]'>
            <div className=' flex gap-[100px] sm:gap-[80px]'>
                <h3>Email Address:</h3>
                <h4>tosh@yahoo.com</h4>
            </div>
            <div className=' flex gap-[140px] sm:gap-[75px]'>
                <h3>Fullname:</h3>
                <h4>Ismaheel Abdulmaleeq</h4>
            </div>
            <div className=' flex gap-[95px] sm:justify-between'>
                <h3>Phone Number:</h3>
                <h4>08103856846</h4>
            </div>
            <div className=' flex gap-[120px] sm:justify-between'>
                <h3>Date of Birth</h3>
                <h4>09/09/1968</h4>
            </div>
            <div className=' flex gap-[105px] sm:justify-between'>
                <h3>State of Origin</h3>
                <h4>kwara state</h4>
            </div>
            <div className=' flex gap-[155px] sm:justify-between'>
                <h3>Gender:</h3>
                <h4>Male</h4>
            </div>
            <div className=' flex gap-[175px] sm:gap-[100px]'>
                <h3>Bank:</h3>
                <h4>Guarantee Trusted Bank</h4>
            </div>
            <div className=' flex gap-[80px] sm:justify-between'>
                <h3>Account Number:</h3>
                <h4>0230219059</h4>
            </div>
            <div className=' flex gap-[92px] sm:gap-[30px]'>
                <h3>Account Name:</h3>
                <h4>Ismaheel Abdulmaleeq</h4>
            </div>
           
            </div>
        </div>
       
        <div className=' flex flex-col gap-[20px] '>
       
                <p className=' text-[#F178B6]'>Do you wish to edit your information?</p>
           
            {/* <div className='bg-[#7879F1] flex justify-center rounded-[20px]  py-6'><h3 className='rotate-[-40deg]  text-[white]'>Verified</h3> </div> */}
            <button className=' bg-[#F178B6] text-[white] px-8 py-4 rounded-[10px]'>Edit Profile</button>
        </div>
       </div>
       <div className='relative sm:absolute bottom-48 left-11 sm:bottom-[500px] sm:left-[280px] bg-[#7879F1] flex justify-center rounded-[20px] px-4  py-6'><h3 className='rotate-[-40deg]  text-[white]'>Verified</h3> </div>
       
    </div>
  )
}

export default UserProfile
