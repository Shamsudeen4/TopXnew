import React from 'react'
import './TrendingBet.css'


function TrendingBet() {
  return (
    <div className='TrendingBet'>
        <div className='trending-section1'>
            <h3>Hey Chrismi,</h3>
            <h3>Explore the trending bets</h3>
            <p>There are many possibilities you can achieve with us. Let’s help you gain reward for what you do doing the most!</p>

            <div className='trending-table-section'>
                <h1>Trending Bets</h1>
                <table className='trending-table'>
                    <tr className='trending-heading'>
                        <th>Players Name</th>
                        <th>Game Time (A T)</th>
                        <th>Amount Stake</th>
                        <th>Winners Take Home</th>
                        <th>Status</th>
                    </tr>
                    <tr className='trending-heading'>
                        <td>1. Toshmoney VS Toshbaba </td>
                        <td>04:45 PM</td>
                        <td>NGN 20,000 </td>
                        <td>NGN 40,000 </td>
                        <td>Ongoing</td>
                    </tr>

                </table>
        </div>
        </div>
        
    </div>
  )
}

export default TrendingBet