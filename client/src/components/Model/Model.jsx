import React, { useState } from 'react';
import CopyToClip from '../CopyToClip/CopyToClip';
import { CloseBtn, ShowBtn } from '../../components/MsgBtn';
import RQrcord from '../RQrcord/QrCode';

import { alert, copy_icon, toggle_2 } from '../../assets/img';

import './Model.css'

const Model = ({ setModelToggleFun, walletAddress }) => {
    const [showMore, setShowMore] = useState(true);
    const [qrcInput, setQrcInput] = useState(walletAddress)



    // const inputContent = (text) => {
    //     setQrcInput(text)
    //     console.log("this is qrcode from the child of this parent", qrcInput);
    // }
    // console.log(qrcInput);

    return (
        <div className="model_full_bg">
            <div className='model'>
                <div className="model_container">
                    <div className="model_top flex-center">
                        <h3 className='model_title'>Your Public Address</h3>
                        <img className='toggle_2' src={toggle_2} alt="toggle_menu" onClick={setModelToggleFun} />
                    </div>
                    <div className="model_bottom">
                        <div className="model_address_cont flex-center cont_bg">
                            <p>{walletAddress}</p>
                            <CopyToClip walletAddress={walletAddress} />
                        </div>
                        <div className="alert">
                            <img src={alert} alt="alert_icon" />
                            <p>Please make sure you are sending assets on the Fuse network</p>
                        </div>
                        <button className="btn" onClick={setModelToggleFun}>Close</button>
                    </div>

                    <div className="show_msg" onClick={() => setShowMore(!showMore)}>
                        {showMore ? <ShowBtn /> : <RQrcord qrcInput={qrcInput} />}
                        {showMore ? "" : <CloseBtn />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model