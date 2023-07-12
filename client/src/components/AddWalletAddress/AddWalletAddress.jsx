import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../reusables/Button/Button';

import './AddWalletAddress.css'

const AddWalletAddress = ({getinputAddress}) => {
  const [inputAddress, setInputAddress] = useState("")

  const value = (e) => {
    e.preventDefault();
  }
  const handleAdress = (event) => {
    setInputAddress(event.target.value)
    getinputAddress(inputAddress);
  }

  console.log(inputAddress);

  const text = "Continue"
  return (
    <div className='addWallet'>
      <div className="container">
        <h2 className='title'>Add Wallet Address</h2>
        <form className="inputs_cont" onSubmit={value}>
          <input
            className='input'
            value={inputAddress}
            placeholder="Enter or copy wallet address"
            onChange={event => handleAdress(event)}
          />
          <Link to="/wallet" state={inputAddress}>
            <Button />
          </Link>
        </form>
      </div>
    </div>
  )
}

export default AddWalletAddress;