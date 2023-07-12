import React, { useState } from 'react';
import './Home.css'
import AddWalletAddress from '../../components/AddWalletAddress/AddWalletAddress';

const Home = () => {
  const [inputAddress, setinputAddress] = useState("")

  const getinputAddress = addressInput => {
    setinputAddress(addressInput)
    console.log("this is the test from home: ", addressInput);
  }
  console.log("this is from home", inputAddress);

  return (
    <div className='home'>
      <div className="container">
        <AddWalletAddress getinputAddress={getinputAddress}/>
      </div>
    </div>
  );
}

export default Home;
