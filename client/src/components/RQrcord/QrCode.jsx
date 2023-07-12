import React from 'react';
import QRCode from "react-qr-code";

const RQrcord = ({qrcInput}) => {
    console.log(":chcking from rrrrr", qrcInput);
    return (
        <div style={{ height: "auto", margin: "0 auto", width: "30%" }}>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={qrcInput}
                viewBox={`0 0 256 256`}
                id='QrCode'
            />
        </div>
    )
}

export default RQrcord