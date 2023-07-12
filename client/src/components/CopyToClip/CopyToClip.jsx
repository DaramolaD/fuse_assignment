import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { copy_icon } from '../../assets/img';

const CopyToClip = ({walletAddress}) => {
    const [copiedMsg, setCopiedMsg] = useState(false);

    const sucessMsg =  <p className='absolute_p'>Sucessfuly Copied</p>

    const handleSucesClick = () => {
        setCopiedMsg(true)
    }
    
  return (
    
    <div>
        {copiedMsg ? sucessMsg : ""}

        <CopyToClipboard text={walletAddress}
          onCopy={() => setCopiedMsg(true)}>
          <img src={copy_icon} alt="copy_icon"/>
        </CopyToClipboard>
    </div>
  )
}

export default CopyToClip