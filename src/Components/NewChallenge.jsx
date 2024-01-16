import React from 'react'
import './NewChallenge.css'


function NewChallenge() {
  return (
    <div className='NewChallenge sm:mt-[16%]'>
        <div className='NewChallenge-section1'>
            <h3>Are you a pro gamer?</h3>
            <h3>Challenge someone today and stand a chance to win big bag!</h3>
            
            <p>There are many possibilities you can achieve with us. Let’s help you gain reward for what you do doing the most!</p>
        </div>
        <div className='Newchallenge-register'>
            <h1>Post New Challenge</h1>
            <div className='Newchallenge-inputs'>
                <p>Challenge Title</p>
                <input type="text" placeholder='No One can win me on call of duty!'/>
            </div>
            <div className='Newchallenge-inputs'>
                <p>Amount to stake (NGN)</p>
                <input type="text" placeholder='20000'/>
            </div>
            <div className='Newchallenge-inputs'>
                <p>Expected Challenge Time</p>
                <input type="text" placeholder='02:00pm'/>
            </div>
            <div className='Newchallenge-inputs'>
                <p>Preferred Level</p>
                <div className='Preferred-Level'>
                    <input type="text" placeholder='Intermediate'/>
                    <input type="text" placeholder='Enter Streaming link'/>
                </div>
            </div>
            <div className='Newchallenge-inputs'>
                <p>More Description for opponent</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className='Newchallenge-button'>
                <button>Post Challenge</button>
            </div>
        </div>
        
    </div>
  )
}

export default NewChallenge