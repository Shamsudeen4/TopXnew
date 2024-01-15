import React, { useState } from 'react';
import Navbar from './Navbar';
import './Wallet.css';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function Wallet() {
  const [showBalance, setShowBalance] = useState(true);
  const availableBalance = 25000; // Initial balance

  const handleToggleBalance = () => {
    setShowBalance((prevShowBalance) => !prevShowBalance);
  };

  return (
    <div className='wallet'>
      {/* <Navbar/> */}
      <div className='wallet-section1'>
            <h3>Wallet</h3>
            <p>Manage your wallet and all other transactions</p>
            <div className='wallet-balance'>
                <div className='wallet-available-balance'>
                    <p>Available Balance</p>
                    <i onClick={handleToggleBalance}>
                    {showBalance ? <FaRegEye /> : <FaRegEyeSlash />}
                    </i>
                </div>
                    <h3>{showBalance ? `NGN ${availableBalance.toFixed(2)}` : '******'}</h3>
                    <p>Estimated Total Balance</p>
                <div className='wallet-button'>
                    <button>Fund Wallet</button>
                    <button>Withdraw Funds</button>
                </div>
        </div>
        <div className='wallet-table-section'>
            <h1>Transaction History</h1>
            <table className='wallet-table'>
                <tr className='wallet-heading'>
                    <th>Transaction Details</th>
                    <th>Amounts</th>
                    <th>Transaction Type</th>
                    <th>Status</th>
                </tr>
                <tr className='wallet-heading'>
                    <td>1. Wallet funded </td>
                    <td>NGN 20,000 </td>
                    <td>Credit </td>
                    <td>Completed </td>
                </tr>

            </table>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
