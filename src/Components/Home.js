import React from 'react'
import NdNavbar from './NdNavbar'
import Dashboard from './Dashboard'
import LatestChallenges from './LatestChallenges'
import TrendingBets from './TrendingBets'
function Home() {
  return (
    <div className=' overflow-hidden'>
      <NdNavbar dashboard="active" />
      <Dashboard/>
      <LatestChallenges/>
      <TrendingBets/>
    </div>
  )
}

export default Home
