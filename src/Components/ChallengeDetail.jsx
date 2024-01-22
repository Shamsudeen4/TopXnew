import React, { useState } from 'react'
import './ChallengeDetail.css'

function ChallengeDetail() {
    const[showPop, setShowPop]= useState(false)
    const toggle = () =>{
        setShowPop(!showPop)
    }
    const steps = [
        {
            number: '1',
            heading: 'Accept the challenge',
            content: "To get started, you first  need to accept the challenge and make sure you copy the streaming link for future reference.",
        },
        {
            number: '2',
            heading: 'Play the game and win',
            content: "Start the game at exactly speculated time and don’t forget to video stream the game should in case there’s something wrong somewhere.",
        },
        {
            number: '3',
            heading: 'Upload the screenshot',
            content: "After the completion of the game, make sure the screenshot of the winner is uploaded even if you take defeat.",
        },
    ]
  return (
    <div className='ChallengeDetail sm:mt-[16%]'>
        <div className='ChallengeDetail-section1'>
            <h3>Accept Challenge</h3>
            <p>Once you accept this challenge, amount specified would be deducted from your available balance and if you don’t have enough funds in your wallet it would not go through.</p>
        </div>
        <div className='step-container'>
            <h1>Steps To Get Started?</h1>
            <div className='step-list'>
                {steps.map((step, index)=>(
                    <div key={index} className='step-border'>
                        <h1>{step.number}</h1>
                        <h2>{step.heading}</h2>
                        <p>{step.content}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='challenge-livestream'>
            <p>Live streaming link: <span>vtttt.co</span></p>
            <div className='livestream-btn'>
                <button>Cancel</button>
                <button onClick={toggle}>Accept</button>
            </div>
        </div>
        <div className={` ${showPop ? 'top-[-800px]' : 'top-[50%] '} absolute transition-[all,3s,ease-linear] p-[150px]`}>
            <form action="" className='bg-[#e2e1e1] p-11 rounded-lg flex flex-col items-end gap-4 shadow-xl' >
                <div className=' flex flex-col gap-[10px]'>
                    <label htmlFor="">Specify the number of rounds you want to go with me:</label>
                    <select name="" id="" className=' w-[20vw] h-[5vh] rounded-md px-2'>
                        <option value="">..</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </div>
                <button className={` bg-[#7879F1] text-[white] py-[10px] px-[20px] rounded-[10px]` }>OK</button>
            </form>
        </div>
    </div>
  )
}

export default ChallengeDetail