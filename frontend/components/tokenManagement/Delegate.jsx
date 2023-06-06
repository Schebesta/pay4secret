import * as React from 'react';
import Router, { useRouter } from "next/router";
import { useSigner } from 'wagmi';
import { ethers, Contract } from 'ethers';
import * as tokenJson from '../../assets/MyToken.json';
import { useState, useEffect } from 'react';
import dotenv from "dotenv";


dotenv.config();


console.log(dotenv)

const TOKEN_ADDRESS="0xB6501b20Db186BBe42D7b50624AcBbdFAF20525a"
const BALLOT_ADDRESS="0xAb4a059e83B3bFB731CfDE1DA0dC4d54fdF0a66E"


export function DelegateEx2() {
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

    const [Error, setError] = useState(null)
    const [DelegatedAddress, setDelegatedAddress] = useState('')

    const chainId = 80001; // This is the chainId for Mumbai Testnet

    const provider = new ethers.providers.AlchemyProvider(chainId, process.env.ALCHEMY_API_KEY);


    const contractAddressToken = `${process.env.TOKEN_ADDRESS}`
    const contractAddressTokenizedBallot = `${process.env.BALLOT_ADDRESS}`

    console.log(`ddd ${process.env.TOKEN_ADDRESS}`)


    const handleInputDelegatedAddress = (event) => {
      setDelegatedAddress(event.target.value);
    };
  

    const tokenContract = new ethers.Contract(
        TOKEN_ADDRESS,
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
        <button onClick={() => delegate(signer, DelegatedAddress, tokenContract, setLoading, setTxData, setError)}>Delegate</button>
    </div>
    )

}

function delegate(signer, address, tokenContract, setLoading, setTxData, setError) {
    setLoading(true);
    tokenContract
        .connect(signer)
        .delegate(address)
        .then((data) => {
            //  console.log("Delegation succesfully1");
            setTxData(data);
            //  console.log("Delegation succesfully2");
            setLoading(false);
            //  console.log("Delegation succesfully3");
            console.log(data);
        }).catch((err) => {
            setError(err.reason);
            setLoading(false);
            console.log(err);
        });
}