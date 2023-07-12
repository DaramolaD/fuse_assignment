import React, { useState } from 'react'

const QrReader = () => {
    const [inputVlaue, setInputValue] = useState("")

    const download = () => {
        const svg = document.getElementById("QrCode");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");

            downloadLink.download = `${inputValue}`;
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }

    return (

        <div onClick={download}>

            <input type="button" value="Dowload" onClick={download}/>
        </div>
    )
}

export default QrReader