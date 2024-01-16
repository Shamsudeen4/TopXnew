import React from 'react'
import img1 from '../Images/signup 1.png'
import dep from '../Images/Group_26945.png'
import play from '../Images/Path_529.png'
import eye from '../Images/Eye.png'
import eye2 from '../Images/Blind (1).png'
import './Signup.css'
function Signup() {
  return (
    <div className='backimg  lg:overflow-x-hidden md:overflow-x-hidden sm:overflow-x-hidden font-worksans bg'>
        <div className=' flex items-center justify-around font-worksans bg-[#5d5fef60] sm:flex-col md:flex-col  absolute left-0 top-0 right-0 bottom-0'>
            <div>
                <div className=' text-center'>
                <p><span className=' text-white font-bold text-[35px]'>Are You A Gamer?</span> <br/>
                <span className=' text-white font-bold text-[35px]'>Top X</span> <span className=' text-gray-100 text-[25px] font-light'>
                 is the best, <br/>platform to earn reward <br/> for your passion
                </span>
                </p>
                </div>
                <div>
                  <p className=' text-center p-[30px] text-white text-[20px] underline'>Get started in 3step</p>
              <div className=' flex items-center gap-[30px] relative left-[120px] sm:relative sm:left-[0px]  md:hidden sm:hidden md:relative md:left-[0]'>
                 <div className=' flex flex-col'>
                 <div className=' bg-[#5D5FEF] flex flex-col items-center w-28 rounded-[200em] p-[10px]'>
                  <img src={img1} alt="" />
                  <p className=' text-white font-worksans'>Sign up</p>
                  </div>
                  <p className='  text-white'>
                    sign up in less<br/> than 15 seconds
                  </p>
                 </div>
                 <div className=' flex flex-col relative top-[40px] sm:relative sm:top-[0px]'>
                 <div className=' bg-[#7879F1] flex flex-col items-center w-28 rounded-[200em] p-[10px]'>
                  <img src={dep} alt="" />
                  <p className=' text-white font-worksans'>Deposite</p>
                  </div>
                  <p className=' text-white'>
                  Deposit & challenge <br/> another  gamer
                  </p>
                 </div>
                  <div className=' flex flex-col relative top-[70px] sm:relative sm:top-[0px]'>
                  <div className=' bg-[#A5A6F6;] flex flex-col items-center w-28 rounded-[200em] p-[10px]'>
                  <img src={play} alt="" />
                  <p className=' text-white font-worksans'>play</p>
                  </div>
                  <p className='  text-white'>Play and claim <br/> rewards every day</p>
                  </div>
              </div>
                </div>
            </div>
            {/* first*/}
            <div className=' font-worksans flex flex-col gap-[35px] bg-[#a5a6f680] p-[60px] rounded-[20px] sm:p-[10px] md:p-[55px] sm:gap-[20px]'>
              <p className=' text-white '><span className=' font-bold text-lg'>Sign up.</span> <span className='text-lg font-light'>it's fast!</span></p>
              <input type="text" name="" id="" placeholder='Username' className=' outline-none rounded-[5px] p-2 bg-[#D9D9D9] border-[1px] border-solid border-white' />
              <input type="email" name="" id="" placeholder='Email' className=' outline-none rounded-[5px] p-2 border-[1px] bg-[#D9D9D9] border-solid border-white' />
              <div className=' flex outline-none rounded-[5px] bg-[#D9D9D9] p-2 border-[1px] border-solid border-white gap-[50px]'>
              <input type="password" name="" id="" placeholder='Password' className=' outline-none bg-transparent '/>
              <img src={eye} alt="" className=' h-[30px]'/>
              </div>
             <div className='flex flex-col '>
              <label className=' text-[#F178B6] rounded-[5px]'>Confirm Password</label>
              <div  className=' outline-[#F178B6] rounded-[5px] flex bg-white items-center gap-[45px]'>
             <input type="password" name="" id=""  className=' outline-none  p-2 ' />
             <img src={eye2} alt="" className=' h-[25px]' />
              </div>
            <div className=' flex items-center gap-[10px] pt-3'>
            <input type="checkbox" name="" id="" className=' bg-black  ' /><p className=' text-white'>
             I’m over 18 years old and I agree to the <br/> Legal terms and Privacy Policy.
             </p>
            </div>
            <button className=' text-white bg-[#7575fc] p-[10px] rounded-[20px] border-solid border-white'>Join</button>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Signup