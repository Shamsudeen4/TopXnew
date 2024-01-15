import React from 'react'
import './ChallengeDetail.css'

function ChallengeDetail() {
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
    <div className='ChallengeDetail'>
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
                <button>Accept</button>
            </div>
        </div>
        
    </div>
  )
}

export default ChallengeDetail