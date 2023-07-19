import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";
import * as tokenJson from '../../assets/MyToken.json';
import { ethers } from 'ethers';


const contractAddressToken = "0x35a24F28f846DB57F13B534799659824A81f31FF"

const contractAddressBallot = "0xc8e653ea3F2245C640506659180a3F2a2189AfB3"

export function DelegateEx() {
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
  const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY);
  const handleInputDelegatedAddress = (event) => {
    setDelegatedAddress(event.target.value);
  };


  const tokenContract = new ethers.Contract(
    contractAddressToken,
    tokenJson.abi,
    provider
  );

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
      <button onClick={() => delegate(signer, DelegatedAddress, tokenContract, setLoading, setTxData)}>Delegate</button>
    </div>
  )

}

function delegate(signer, address, tokenContract, setLoading, setTxData) {
  setLoading(true);
  tokenContract.connect(signer).delegate(address)
    .then((data) => { // <-- Add the parameter to capture the returned data
      setTxData(data);
      setLoading(false);
      console.log("Delegation completed");
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
}

