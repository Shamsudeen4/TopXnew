import React from 'react'
import NdNavbar from './NdNavbar'
import TrendingBet from './TrendingBet'

function Trending() {
  return (
    <div>
      <NdNavbar trending="active"/>
      <TrendingBet/>
    </div>
  )
}

export default Trending
