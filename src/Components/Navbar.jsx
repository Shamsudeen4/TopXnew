import React from 'react'
import { useState } from 'react'
import logo from '../Images/Topxtransparent black (1) 2.png'
function Navbar() {
    const[active, setActive] = useState(false)
    const toggle = ()=>{
        setActive(!active)
    }
  return (
    <div className=' font-worksans'>
        <nav className=' flex items-center bg-[#373742] lg:justify-around lg:gap-[50px] py-[0.9%] sm:py-[1.2%]'>
            <div className=' flex font-worksans  gap-[40px] sm:hidden'>
                <h2 className='font-semibold text-[white] text-[22px]'>Log In</h2>
                <h2 className=' text-[22px] text-[#F178B6]'>Trending Bets</h2>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className=' lg:hidden ' onClick={toggle}>
                <div className=' bg-[white] m-[4px] h-[2px] w-[28px]'></div>
                <div className=' bg-[white] m-[4px] h-[2px] w-[28px]'></div>
                <div className=' bg-[white] m-[4px] h-[2px] w-[28px]'></div>
            </div>
            <div className='sm:hidden flex font-worksans items-center text-[white] gap-[40px]'>
                <h2>New Challenges</h2>
                <h2 className=' font-semibold border-[2px] rounded-[10px] border-[white] px-[20px] py-[6px] text-[20px]'>Join</h2>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar
