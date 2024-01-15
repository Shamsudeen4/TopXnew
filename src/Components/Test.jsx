import React, {useState} from 'react'

function Test() {
    const [showBalance, setShowBalance] = useState(true);
    const [balance, setBalance] = useState(1000); // Initial balance
  
    const handleToggleBalance = () => {
      setShowBalance((prevShowBalance) => !prevShowBalance);
    };
  return (
    <div>
      <h1>Wallet Balance</h1>
      <label>Balance: </label>
      <span>{showBalance ? `$${balance}` : '***'}</span>
      <button onClick={handleToggleBalance}>
        {showBalance ? 'Hide Balance' : 'Show Balance'}
      </button>
    </div>
  )
}

export default Test