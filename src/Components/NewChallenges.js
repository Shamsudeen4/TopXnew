import React from 'react'
import NdNavbar from './NdNavbar'
import NewChallenge from './NewChallenge'

function NewChallenges() {
  return (
    <div>
      <NdNavbar challenges="active"/>
      <NewChallenge/>
    </div>
  )
}

export default NewChallenges
