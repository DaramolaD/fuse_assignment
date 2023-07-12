import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Details.css'
import fuseApi from '../../utils/fuseApi';

const Details = () => {
    const [coindetails, setCoindetails] = useState("");
    const location = useLocation();
    
    
    const contractAddress  = location.state
    
    const url = `api?module=token&action=getToken&contractaddress=${contractAddress}`

    const fectchCoins = async () => {
        try {
            const response = await fuseApi.get(url);
            const result = response.data.result
            setCoindetails(result)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fectchCoins();
    }, []);

    const { decimals, name, symbol, totalSupply } = coindetails

    return (
        <div className='details'>
            <div className="container">
                <div className="coin_item_details">
                    <h2 className='title'>Details</h2>
                    <div className="coin_item_detail_cont padding-inline bg">
                        <h3 className="card_title_s margin-btm">Fuse</h3>
                        <div className="coin_item_card_cont">
                            <div className="coin_item_card cont_bg flex-center">
                                <h3 className="card_title">Symbol</h3>
                                <p className='card_value'>{symbol}</p>
                            </div>
                            <div className="coin_item_card cont_bg_2 flex-center">
                                <h3 className="card_title">Name</h3>
                                <p className='card_value'>{name}</p>
                            </div>
                            <div className="coin_item_card cont_bg flex-center">
                                <h3 className="card_title">Total Supply</h3>
                                <p className='card_value'>{totalSupply}</p>
                            </div>
                            <div className="coin_item_card cont_bg_2 flex-center">
                                <h3 className="card_title">Decimals</h3>
                                <p className='card_value'>{decimals}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details