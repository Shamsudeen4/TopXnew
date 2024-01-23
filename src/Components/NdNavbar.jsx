import React from 'react'
import logo from '../Images/Topxtransparent black (1) 2.png'
import userPro from '../Images/User.png'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
function NdNavbar(props) {
  const {user, setUser} = useContext(UserContext) 
  const [data, setData] = useState('')
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const EndPoint = 'https://topxx.onrender.com/user-dashboard'
  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch(EndPoint);
        if (!response.ok) {
          throw new Error('error');
        }
        const responseData = await response.json();
        setUser(responseData);
        setData(responseData)
        console.log(responseData);
      } catch (error) {
        console.error('Error fetching Data', error);
      }
    };

    handleData();
  }, [setUser]);

  return (
    <div className='font-worksans '>
      <div className=' text-[white] flex bg-[#373742] justify-center sm:items-center lg:gap-[100px] sm:gap-[30px] py-[1%]  '>
        <a href="/"><div>
            <img className='sm:w-[25vw]' src={logo} alt="" />
        </div></a>
        <div className=' flex items-center lg:gap-[200px]  '>
            <ul className='flex gap-[80px] sm:hidden'>
              <li className={props.dashboard}><a href="/">Dashboard</a></li>
                <li className={props.wallet}><a href="/wallet"> Wallet</a></li>
                <li className={props.trending}><a href="/trend">Trending Bets</a></li>
                <li className={props.challenges}><a href="/newChallenge">New Challenge</a></li> 
            </ul>
           
            <div className=' sm:flex sm:gap-4 items-center'>
            <button onClick={toggleMenu} className={`lg:hidden z-[500] ${menu ? "toggle open" : "toggle"}`}>
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
            </button>
            <a href="/user">
            <div className=' flex items-center bg-[#7879F1] justify-center 
                              lg:p-[7px] rounded-md lg:pr-[22px] sm:px-[15px] sm:py-[8px] 
                              sm:pr-[25px] lg:gap-[10px] sm:gap-[10px]'>
                <img className='sm:w-[6vw]' src={userPro} alt="" />
                <p>{user?.user?.username}</p>
                <p>{data?.user?.username}</p>
            </div>
            </a>
            </div>
        </div>
      </div>
      <ul className={`flex uppercase  z-[500]  w-[100%]  transition-[all,3s,ease-linear] 
            ${menu ? "mt-[-65px]" : " mt-[-550px]"} flex-col px-5 bg-[#7879F1] lg:hidden sm:relative
            top-[65px] py-[30px]   gap-4 items-center text-[white]`}>
                <li className={props.dashboard}><a href="/">Dashboard</a></li>
                <li className={props.wallet}><a href="/wallet"> Wallet</a></li>
                <li className={props.trending}><a href="/trend">Trending Bets</a></li>
                <li className={props.challenges}><a href="/newChallenge">New Challenge</a></li> 
            </ul>
    </div>
  )
}

export default NdNavbar
