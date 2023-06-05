import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";


export function DelegateEx1() {
    return (
        <div>
                <Delegate></Delegate>
        </div>
    )
  }
  
  function Delegate() {
    
    const { data: signer } = useSigner();
    const [txData, setTxData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [DelegatedAddress, setDelegatedAddress] = useState('')


    const handleInputDelegatedAddress = (event) => {
      setDelegatedAddress(event.target.value);
    };
  
    if (isLoading) return (
      <>
        <h2>Delegation informations</h2>
        <p>Delegating voting power...</p>
      </>
    )
  
    if (txData) return (
      <>
        <p>Delegation is done <p>Delegated at:  <a href={"https://mumbai.polygonscan.com/tx/" + txData.hash} target="_blank">{txData.hash}</a> </p> : <p></p> </p>
      </>
  
    )
  
  
    return (
      <div>
        <p><input type="text" value={DelegatedAddress} onChange={handleInputDelegatedAddress} />Delegated Address</p>
        <button onClick={() => delegate(signer, DelegatedAddress, setLoading, setTxData)}>Delegate</button>
      </div>
    )
  
}


function delegate(signer, DelegatedAddress, setLoading, setTxData) {
    setLoading(true);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signer: signer, addressReceiver: DelegatedAddress  })
    };

    fetch('http://localhost:3001/delegate-tokens', requestOptions)
        .then(response => response.json())
        .then((data) => {
            setTxData(data);
            setLoading(false);
        });
}
