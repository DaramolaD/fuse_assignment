import React from 'react'
import { useNavigate } from 'react-router-dom';
import { fuse } from '../../assets/img'
import './CoinItem.css'

const CoinItem = ({data}) => {
  const {name} = data
  const navigate = useNavigate();

  const handleCoinClick = () => {
    
    navigate("/details", { state: data.contractAddress });
  };
  return (
    <div className="coin_item cont_bg flex-center" onClick={handleCoinClick}>
      <div className="coin_details">
        <img src={fuse} alt="coin_icon" className="coin_icon" />
        <h3 className="coin_name">{name}</h3>
      </div>
      <h4 className='coin_price'>$34</h4>
    </div>
  )
}

export default CoinItem