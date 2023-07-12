import React, { useState, useEffect } from 'react';
import './Wallet.css';
import Button from '../../reusables/Button/Button';
import { Arrow, arrow_percent, fuse, fuse_dollar } from '../../assets/img';
import Model from '../../components/Model/Model';

import fuseApi from '../../utils/fuseApi';
import { useLocation } from 'react-router-dom';
import CoinItem from '../../components/CoinItem/CoinItem';
import axios from 'axios';

const Wallet = () => {
    const [modelToggle, setModelToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [balance, setBalance] = useState([])
    const [visible, setVisible] = useState(3); // number of coins to be displayed
    const [error, setError] = useState("")

    // access to the pass 
    const location = useLocation();

    // ..this is to be recieved
    // const walletAddress = '0x6e0d33da634169d43de22F08b7D52d517Ac9b65f'
    const walletAddress = location.state
    const url = `api?module=account&action=tokenlist&address=${walletAddress}`;

    const url2 = `api?module=account&action=balance&address=${walletAddress}`;

    const resultSetDatas = (para) => {
        setDatas(para)
    }

    const fectchCoins = async () => {
        setIsLoading(true);
        try {
            const url1 = fuseApi.get(url)
            const url25 = fuseApi.get(url2)
            axios.all([url1, url25]).then(axios.spread((...allData) => {
                const allCoins = allData[0]
                const userBalnce = allData[1]


                setDatas(allCoins.data.result);
                setBalance(userBalnce.data.result);
            })
            )
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        return () => fectchCoins();
    }, []);


    // const showMore = () => {
    //     setVisible(visible + 3)
    // }

    const setModelToggleFun = () => {
        setModelToggle((prev) => !prev)
    }

    const percent = "+0%";
    const arrowPercent = arrow_percent;

    return (
        <div className='wallet'>
            <div className="container">
                <h2 className='title'>Wallet</h2>
                <div className="container_cards">
                    <div className="balance_card_cont padding-inline bg flex-center">
                        <div className="balance_card">
                            <h3 className="card_title_s">Your Balance</h3>
                            <div className="balance_value">
                                <p className="value">${balance}</p>
                                <span className='percentage_value green'>{percent}</span>
                                <img src={arrowPercent} alt="arrow_percent" />
                            </div>
                        </div>
                        <div className="card_btn" onClick={setModelToggleFun}>
                            <img src={Arrow} alt="arrow_receive" />
                            <p>Receive</p>
                        </div>
                    </div>
                    <div className="coin_card_cont padding-inline bg">
                        <h3 className="card_title_s margin-btm">Your Coins</h3>
                        <div className="coins_item_cont">
                            {datas.map((data, index) => (
                                <CoinItem key={index} data={data} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {modelToggle && <Model setModelToggleFun={setModelToggleFun} walletAddress={walletAddress} />}
        </div>
    )
}

export default Wallet;