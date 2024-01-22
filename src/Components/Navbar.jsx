import React from 'react'
import { useState } from 'react'
import logo from '../Images/Topxtransparent black (1) 2.png'
function Navbar() {
    const[active, setActive] = useState(false)
    const toggle = ()=>{
        setActive(!active)
    }
  return (
    <div className=' z-99 '>
        <nav className=' flex items-center bg-[#373742] lg:justify-around lg:gap-[50px] py-[0.9%] sm:py-[1.2%] sm:gap-[80px] sm:justify-center '>
            <div className=' flex font-worksans  gap-[40px] sm:hidden'>
                <h2 className='font-semibold text-[white] text-[22px]'>Log In</h2>
                <h2 className=' text-[22px] text-[#F178B6]'>Trending Bets</h2>
            </div>
            <div>
                <img className=' sm:w-[30vw]' src={logo} alt="" />
            </div>
            <button onClick={toggle} className={`lg:hidden z-[500] ${active ? "toggle open" : "toggle"}`}>
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
            </button>
            
            
            <div className='sm:hidden flex font-worksans items-center text-[white] gap-[40px]'>
                <h2>New Challenges</h2>
                <h2 className=' font-semibold border-[2px] rounded-[10px] border-[white] px-[20px] py-[6px] text-[20px]'>Join</h2>
            </div>
            
        </nav>
        <ul className={`flex uppercase  z-[500]  w-[100%]  transition-[all,3s,ease-linear] 
            ${active ? "mt-[-65px]" : " mt-[-550px]"} flex-col px-5 bg-[#F178B6] lg:hidden sm:relative
            top-[65px] py-[30px]   gap-4 items-center text-[white]`}>
                <li ><a href="/">Join</a></li>
                <li ><a href="/wallet"> Trending Bets</a></li>
                <li ><a href="/newChallenge">New Challenge</a></li> 
            </ul>
    </div>
  )
}

export default Navbar
