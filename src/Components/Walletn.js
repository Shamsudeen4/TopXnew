import React from 'react'

import Wallet from './Wallet'
import NdNavbar from './NdNavbar'

function Walletn() {
  return (
    <div>
      <NdNavbar wallet="active"/>
      <Wallet/>
    </div>
  )
}

export default Walletn
